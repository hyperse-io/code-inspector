import type { InputOptions } from '@babel/core';

type EvolvePresetPresets = {
  /**
   * List of plugins to load and use
   *
   * Default: `[]`
   */
  plugins?: InputOptions['plugins'];
  /**
   * List of presets (a set of plugins) to load and use
   *
   * Default: `[]`
   */
  presets?: InputOptions['presets'];
};

export const reactBabelPreset = (
  mode: 'development' | 'production'
): EvolvePresetPresets => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // Babel 8 removed `corejs` / `useBuiltIns`; polyfill injection is now
          // handled by `babel-plugin-polyfill-corejs3`. These tests only assert
          // on JSX source attribution, so no polyfills are needed here.
          //
          // Exclude transforms that make all code slower, and the ones handled
          // by `FastAsync` in the application runtime.
          exclude: [
            'transform-typeof-symbol',
            'transform-regenerator',
            'transform-async-to-generator',
          ],
          targets: {
            browsers: ['ie >= 11', 'safari > 10'],
          },
        },
      ],
      [
        '@babel/preset-typescript',
        {
          // Babel 8 removed `.isTSX` / `.allExtensions`; TSX is now detected
          // from the file extension.
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: mode === 'development',
        },
      ],
    ],
    plugins: [],
  };
};
