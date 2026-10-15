import type { PluginPass } from '@babel/core';

/**
 * Options accepted by the inspector Babel plugin.
 *
 * Note this is the plugin *options* object (the second argument passed by Babel
 * to the plugin factory), not the per-file plugin state.
 */
export interface PluginOptions {
  /**
   * The current working directory of the project
   *
   * If not provided, the file name is absolute path
   */
  projectCwd?: string;
}

export interface PluginState extends PluginPass {
  /**
   * The current working directory of the project
   *
   * If not provided, the file name is absolute path
   */
  projectCwd?: string;
}
