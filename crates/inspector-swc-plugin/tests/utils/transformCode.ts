import path from 'path/posix';
import { fileURLToPath } from 'url';
import { transform } from '@swc/core';

export const transformCode = async (
  code: string,
  fileName: string,
  options?: {
    projectCwd?: string;
    isAbsolutePath?: boolean;
  }
) => {
  const pluginName = 'inspector_swc_plugin.wasm';
  const pluginPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '../../dist',
    pluginName
  );

  return transform(code, {
    sourceMaps: true,
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
      },
      transform: {
        react: {
          pragma: 'React.createElement',
          pragmaFrag: 'React.Fragment',
          throwIfNamespace: true,
          development: false,
          useBuiltins: true,
        },
      },
      target: 'es2018',
      experimental: {
        plugins: [[pluginPath, { ...(options || {}) }]],
      },
    },
    filename: fileName,
  });
};
