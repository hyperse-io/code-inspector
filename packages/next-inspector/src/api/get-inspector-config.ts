import type { PluginOptions } from '../types/type-plugin-options.js';

export const getInspectorConfig = async (): Promise<PluginOptions> => {
  const { nextInspectorConfig } =
    await import('@hyperse/next-inspector/config');
  return nextInspectorConfig as unknown as PluginOptions;
};
