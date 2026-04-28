/**
 * params for launch editor endpoint
 */
export interface LaunchEditorParams {
  fileName: string;
  /** number, but string format for url params */
  lineNumber?: string;
  /** number, but string format for url params */
  colNumber?: string;
  /** specify code editor to open */
  editor?: TrustedEditor;
}

/**
 * in which support by `launch-editor` in server-side.
 *
 * with using other custom editors, please to use URL-Scheme from browser to open it.
 */
export enum TrustedEditorEnum {
  VSCode = 'code',
  VSCodeInsiders = 'code-insiders',
  VSCodium = 'vscodium',
  VSCodiumInsiders = 'vscodium-insiders',
  Codium = 'codium',
  Cursor = 'cursor',
  WebStorm = 'webstorm',
  AppCode = 'appcode',
  Idea = 'idea',
  Phpstorm = 'phpstorm',
  Pycharm = 'pycharm',
  Rubymine = 'rubymine',
  Goland = 'goland',
  Rider = 'rider',
  Sublime = 'subl',
  Zed = 'zed',
  Atom = 'atom',
  Vim = 'vim',
  Neovim = 'nvim',
  Emacs = 'emacs',
}

/**
 * The trusted editors that can be launched from browser.
 */
export type TrustedEditor = `${TrustedEditorEnum}`;
