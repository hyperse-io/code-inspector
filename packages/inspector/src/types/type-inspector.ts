import type { ReactNode } from 'react';
import type { Fiber } from 'react-reconciler';
import type { TrustedEditor } from '@hyperse/inspector-common';
import type {
  ElementItem,
  InspectContextPanel,
} from '@hyperse/inspector-component';
import type { DOMElement } from '../agent/dom-inspect-agent.js';
import type { InspectAgent } from './type-agent.js';
import type { CodeInfo } from './type-code.js';

export interface InspectElementItem<Element = any> extends ElementItem {
  agent: InspectAgent<Element>;
  element?: Element | null;
}

export type ElementInInspectAgents<Agents> = Agents extends (infer Agent)[]
  ? Agent extends InspectAgent<infer Element>
    ? Element
    : unknown
  : unknown;

/**
 * the inspect meta info that is sent to the callback when an element is hovered over or clicked.
 */
export interface InspectParams<Element = DOMElement> {
  /** hover / click event target dom element */
  element: Element;
  /** nearest named react component fiber for dom element */
  fiber?: Fiber;
  /** source file line / column / path info for react component */
  codeInfo?: CodeInfo;
  /** react component name for dom element */
  name?: string;
  /**
   * user chosen prefer editor
   *
   * > add in version `v2.1.0`
   */
  editor?: TrustedEditor;
}

export type OnInspectElementParams<Element = DOMElement> = Omit<
  Required<InspectParams<Element>>,
  'editor'
> &
  Pick<InspectParams<Element>, 'editor'>;

export interface InspectorProps<
  InspectAgents extends InspectAgent<any>[],
  Element extends ElementInInspectAgents<InspectAgents> =
    ElementInInspectAgents<InspectAgents>,
> {
  /**
   * Custom launch editor endpoint.
   *
   * @default `/__hps_inspector`
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
   * Inspector Component toggle hotkeys,
   *
   * supported keys see: https://github.com/jaywcjlove/hotkeys#supported-keys
   *
   * @default - `['$mod', 'i']` on macOS, `['Ctrl', 'i']` on other platforms.
   *
   */
  keys?: string[];

  /**
   * If setting `active` prop, the Inspector will be a Controlled React Component,
   *   you need to control the `true`/`false` state to active the Inspector.
   *
   * If not setting `active` prop, this only a Uncontrolled component that
   *   will activate/deactivate by hotkeys.
   *
   * > add in version `v2.0.0`
   */
  active?: boolean;

  /**
   * Trigger by `active` state change, includes:
   * - hotkeys toggle, before activate/deactivate Inspector
   * - Escape / Click, before deactivate Inspector
   *
   * will NOT trigger by `active` prop change.
   *
   * > add in version `v2.0.0`
   */
  onActiveChange?: (active: boolean) => void;

  /**
   * Whether to disable all behavior include hotkeys listening or trigger,
   * will automatically disable in production environment by default.
   *
   * @default `true` if `NODE_ENV` is 'production', otherwise is `false`.
   *
   * > add in version `v2.0.0`
   */
  disable?: boolean;

  /**
   * Agent for get inspection info in different React renderer with user interaction
   *
   * Default: {@link domInspectAgent}
   *
   * > add in version `v2.1.0`
   */
  inspectAgents?: InspectAgents;

  /**
   * Callback when left-clicking on an element, with ensuring the source code info is found.
   *
   * By setting the `onInspectElement` prop, the default behavior ("open local IDE") will be disabled,
   *   that means you want to manually handle the source info, or handle how to goto editor by yourself.
   *
   * You can also use builtin `gotoServerEditor` utils in `onInspectElement` to get origin behavior ("open local IDE on server-side"),
   *   it looks like:
   *
   * ```tsx
   * import { Inspector, gotoServerEditor } from '@hyperse/inspector'
   *
   * <Inspector
   *   onInspectElement={({ codeInfo }) => {
   *     ...; // your processing
   *     gotoServerEditor(codeInfo)
   *   }}
   * </Inspector>
   * ```
   *
   * > add in version `v2.0.0`
   */
  onInspectElement?: (params: OnInspectElementParams<Element>) => void;

  /** Callback when hovering on an element */
  onHoverElement?: (params: InspectParams<Element>) => void;

  /**
   * Callback when left-clicking on an element.
   */
  onClickElement?: (params: InspectParams<Element>) => void;

  ContextPanel?: typeof InspectContextPanel;

  /** any children of react nodes */
  children?: ReactNode;
}
