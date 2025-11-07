import type { NextConfig } from 'next';
import { resolve } from 'path';
import type { NextConfigPlugin } from '@hyperse/next-config';
import { createNextConfig } from '@hyperse/next-config';
import withNextInspector from '@hyperse/next-inspector/plugin';

const plugins: NextConfigPlugin[] = [
  withNextInspector({
    projectCwd: resolve(process.cwd()),
    trustedEditor: 'cursor',
    customLaunchEditorEndpoint: '/hps_inspector',
    keys: ['$mod', 'i'],
    hideDomPathAttr: false,
  }),
];

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 */
const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default createNextConfig(nextConfig, plugins);
