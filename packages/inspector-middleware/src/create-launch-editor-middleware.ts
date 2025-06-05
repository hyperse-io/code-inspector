import type { NextFunction, Request, RequestHandler, Response } from 'express';
import launchEditor from 'launch-editor';
import { join, resolve } from 'node:path';
import { launchEditorEndpoint } from '@hyperse/inspector-common';
import {
  type LaunchEditorParams,
  TrustedEditor,
} from '@hyperse/inspector-common';

const trustedEditors = new Set(Object.values(TrustedEditor));

export type CreateLaunchEditorMiddlewareOptions = {
  /**
   * The project cwd.
   * @default process.cwd()
   */
  projectCwd?: string;
  /**
   * The base path of the launch editor endpoint.
   * @default ''
   */
  launchEditorEndpointBase?: string;
  /**
   * The trusted editors that can be launched from browser.
   * @default undefined
   */
  trustedEditor?: TrustedEditor;
};

/**
 * Create a middleware to launch editor(IDE) from browser.
 */
export const createLaunchEditorMiddleware: (
  options?: CreateLaunchEditorMiddlewareOptions
) => RequestHandler = (options = {}) => {
  const launchEditorMiddleware: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {
      projectCwd = process.cwd(),
      launchEditorEndpointBase = '',
      trustedEditor = process.env.LAUNCH_EDITOR,
    } = options;
    const editorEndpoint = join(launchEditorEndpointBase, launchEditorEndpoint);

    if (!req.url?.startsWith(editorEndpoint)) {
      return next();
    }

    const url = new URL(req.url, 'https://placeholder.domain');
    const params = Object.fromEntries(
      url.searchParams.entries()
    ) as unknown as LaunchEditorParams;

    if (!params.fileName) {
      res.statusCode = 400;
      res.end(
        `[hps-launch-editor]: required query param "fileName" is missing.`
      );
      return;
    }

    const fileName = resolve(projectCwd, params.fileName);

    let filePathWithLines = fileName;
    if (params.lineNumber) {
      filePathWithLines += `:${params.lineNumber}`;
      if (params.colNumber) {
        filePathWithLines += `:${params.colNumber}`;
      }
    }

    if (params.editor && !trustedEditors.has(params.editor)) {
      res.statusCode = 400;
      res.end(
        `[hps-launch-editor]: the specified editor (${params.editor}) is not trusted on server! To open this editor, please use URL-scheme to call it from browser.`
      );
      return;
    }

    const editor = params.editor ? params.editor : trustedEditor;

    launchEditor(filePathWithLines, editor);

    res.end();
  };
  return launchEditorMiddleware;
};
