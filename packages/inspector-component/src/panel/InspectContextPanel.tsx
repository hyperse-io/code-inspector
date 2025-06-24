import { createRef, type RefObject } from 'react';
import { createRoot } from 'react-dom/client';
import ShadowRoot from '../components/ShadowRoot.js';
import { InspectContextPanelTagName } from '../constant.js';
import type { ElementItem } from '../types/type-element-item.js';
import InspectContextPanelRoot, {
  type InspectContextPanelRootRef,
  type InspectContextPanelShowParams,
} from './InspectContextPanelRoot.js';

export class InspectContextPanel<Item extends ElementItem = ElementItem> {
  window: Window;
  private panel: HTMLDivElement;
  private panelInstance: RefObject<InspectContextPanelRootRef<Item> | null> =
    createRef();
  private root: ReturnType<typeof createRoot> | null = null;
  private clickOutsideCallbacks = new Set<() => void>();
  private clickOutsideHandler: ((event: MouseEvent) => void) | null = null;

  constructor() {
    // Find the root window, because overlays are positioned relative to it.
    const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;

    const doc = currentWindow.document;
    this.panel = document.createElement(
      InspectContextPanelTagName
    ) as HTMLDivElement;
    doc.documentElement.appendChild(this.panel);

    const InspectContextPanelRootRef = InspectContextPanelRoot<Item>();
    this.root = createRoot(this.panel);
    this.root.render(
      <ShadowRoot>
        <InspectContextPanelRootRef ref={this.panelInstance} />
      </ShadowRoot>
    );
  }

  public show(
    params: InspectContextPanelShowParams<Item> & {
      onClickOutside?: () => void;
    }
  ) {
    // @TODO: open with [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
    this.panelInstance.current?.show(params);

    if (!params.onClickOutside) {
      return;
    }

    this.clickOutsideCallbacks.add(params.onClickOutside);
    this.listenClickOutside();
  }

  public async hide() {
    if (!this.panelInstance) return;
    await this.panelInstance.current?.hide?.();
    this.clickOutsideHandler = null;
  }

  public remove() {
    this.hide();
    this.panel.remove();
    this.removeClickOutsideListener();
  }

  private checkPointerOutside = (event: MouseEvent): boolean => {
    if (event.button !== 0) {
      // 0 represents left button
      return false;
    }

    if (!this.panel) {
      // if panel is destroyed, always treat as outside to do cleanup
      return true;
    }

    // Check if the click is inside the panel by checking both the target and the composed path
    // This handles both regular DOM and Shadow DOM cases
    const composedPath = event.composedPath();
    return !composedPath.includes(this.panel);
  };

  private stopAndPreventEvent = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.checkPointerOutside(event)) {
      return;
    }

    this.stopAndPreventEvent(event);

    const callbacks = Array.from(this.clickOutsideCallbacks);
    callbacks.forEach((callback) => callback());
    this.removeClickOutsideListener();
  };

  private removeClickOutsideListener = () => {
    if (this.clickOutsideHandler) {
      window.removeEventListener('click', this.clickOutsideHandler, true);
      this.clickOutsideHandler = null;
    }
  };

  private listenClickOutside = () => {
    if (this.clickOutsideHandler) {
      return;
    }

    this.clickOutsideHandler = this.handleClickOutside;
    window.addEventListener('click', this.clickOutsideHandler, true);
  };
}
