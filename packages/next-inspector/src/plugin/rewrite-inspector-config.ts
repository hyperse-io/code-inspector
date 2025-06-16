import type { NextConfig } from 'next';
import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { relative, resolve } from 'path/posix';
import { isDev } from '../helpers/helper-is-dev.js';
import type { PluginOptions } from '../types/type-plugin-options.js';

export const rewriteInspectorConfig = (
  pluginOptions: PluginOptions,
  nextConfig?: NextConfig,
  cwd: string = process.cwd()
) => {
  if (!isDev()) {
    return;
  }

  const { basePath } = nextConfig || {};

  if (basePath) {
    pluginOptions.customLaunchEditorEndpoint = join(
      basePath,
      pluginOptions.customLaunchEditorEndpoint || ''
    );
  }

  const configFilePath = resolve(
    import.meta.dirname,
    './plugin-inspector-config.js'
  );
  if (!existsSync(configFilePath)) {
    throw new Error(`Could not find inspector config at ${configFilePath}.`);
  }
  writeFileSync(
    configFilePath,
    `export const nextInspectorConfig = ${JSON.stringify(pluginOptions)}`,
    'utf-8'
  );

  return relative(cwd, configFilePath);
};
