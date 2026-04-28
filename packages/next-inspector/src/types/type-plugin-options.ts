import type { TrustedEditor } from '@hyperse/inspector-common';

export type PluginOptions = {
  /**
   * The project root directory.
   * @default process.cwd()
   */
  projectCwd?: string;

  /**
   * The trusted editors that can be launched from browser.
   * @default 'code'
   */
  trustedEditor?: TrustedEditor;

  /**
   * Inspector Component toggle hotkeys,
   *
   * @default - `['$mod', 'i']` on macOS, `['Ctrl', 'i']` on other platforms.
   *
   */
  keys?: string[];

  /**
   * Whether to automatically inject the code inspector client entry.
   * @default true
   */
  injectClient?: boolean;

  /**
   * The base path of the launch editor endpoint.
   * @default '/hps_inspector'
   */
  customLaunchEditorEndpoint?: string;

  /**
   * Whether to print the promotion message
   *
   * @default `false`
   */
  hideConsole?: boolean;

  /**
   * Whether to print the promotion message in the context of the page.
   *
   * @default `false`
   */
  hideContext?: boolean;

  /**
   * Whether to hide the dom path attribute
   *
   * @default `true`
   */
  hideDomPathAttr?: boolean;

  /**
   * Whether to disable all behavior include hotkeys listening or trigger,
   * will automatically disable in production environment by default.
   *
   * @default `true` if `NODE_ENV` is 'production', otherwise is `false`.
   *
   * > add in version `v2.0.0`
   */
  disable?: boolean;
};
