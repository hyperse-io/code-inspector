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
    // Pin the workspace root explicitly. Turbopack otherwise infers it from the
    // nearest package-manager lockfile (`yarn.lock` at the monorepo root), but
    // it refuses to adopt a root that resolves to `$HOME` — which is exactly
    // what happens in CI when `HOME` is set to the workspace directory. That
    // fallback lands on this example folder, which has no lockfile and no local
    // `node_modules/next`, producing:
    //   Could not find the Next.js package (next/package.json)
    root: resolve(import.meta.dirname, '../..'),
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default createNextConfig(nextConfig, plugins);
