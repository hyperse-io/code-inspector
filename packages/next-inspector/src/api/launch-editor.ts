import { type NextRequest } from 'next/server.js';
import launchEditor from 'launch-editor';
import { resolve } from 'path';
import {
  launchEditorEndpoint,
  type LaunchEditorParams,
  TrustedEditor,
} from '@hyperse/inspector-common';
import { getPackagesSync } from '@manypkg/get-packages';
import { getInspectorConfig } from './get-inspector-config.js';

const trustedEditors = new Set(Object.values(TrustedEditor));

const handler = async (request: NextRequest) => {
  const pluginOptions = await getInspectorConfig();

  const {
    projectCwd = process.cwd(),
    customLaunchEditorEndpoint = launchEditorEndpoint,
    trustedEditor = process.env.LAUNCH_EDITOR,
  } = pluginOptions || {};

  const nextUrl = request.nextUrl;

  if (!customLaunchEditorEndpoint?.endsWith(nextUrl.pathname)) {
    return Response.json(
      {
        error: `[hps-launch-editor]: request url is not valid.`,
      },
      { status: 400 }
    );
  }

  const url = new URL(nextUrl.href);
  const params = Object.fromEntries(
    url.searchParams.entries()
  ) as unknown as LaunchEditorParams;

  if (!params.fileName) {
    return Response.json(
      {
        error: `[hps-launch-editor]: required query param "fileName" is missing.`,
      },
      { status: 400 }
    );
  }

  const { rootDir } = getPackagesSync(projectCwd);

  const fileName = resolve(rootDir, params.fileName);

  let filePathWithLines = fileName;
  if (params.lineNumber) {
    filePathWithLines += `:${params.lineNumber}`;
    if (params.colNumber) {
      filePathWithLines += `:${params.colNumber}`;
    }
  }

  if (params.editor && !trustedEditors.has(params.editor)) {
    return Response.json(
      {
        error: `[hps-launch-editor]: the specified editor (${params.editor}) is not trusted on server! To open this editor, please use URL-scheme to call it from browser.`,
      },
      { status: 400 }
    );
  }

  const editor = params.editor ? params.editor : trustedEditor;

  launchEditor(filePathWithLines, editor);

  return Response.json({
    message: 'Editor launched',
  });
};

export { handler as GET };
