import type { NextConfig } from 'next';
import { mergeOptions } from '@hyperse/config-loader';
import { createApiRoute } from '../api/create-api-route.js';
import type { PluginOptions } from '../types/type-plugin-options.js';
import { rewriteInspectorConfig } from './rewrite-inspector-config.js';

const mergeConfig = (config: NextConfig = {}): NextConfig => {
  const nextConfig = mergeOptions({}, config);

  const finalConfig = mergeOptions(nextConfig, {
    experimental: {
      swcPlugins: [['@hyperse/inspector-swc-plugin', {}]],
    },
  });

  return finalConfig;
};

export default function createNextInspectorPlugin(
  pluginOptions: PluginOptions = {}
) {
  return function withNextInspector(nextConfig?: NextConfig) {
    createApiRoute(pluginOptions);
    rewriteInspectorConfig(pluginOptions, nextConfig);
    return mergeConfig(nextConfig);
  };
}
