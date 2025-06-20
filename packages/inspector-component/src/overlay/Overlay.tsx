import { createRef, type RefObject } from 'react';
import { createRoot } from 'react-dom/client';
import ShadowRoot from '../components/ShadowRoot.js';
import { InspectorOverlayTagName } from '../constant.js';
import { getElementDimensions } from '../helpers/helper-element-dimensions.js';
import { getBoundingRect } from '../helpers/helper-rect.js';
import type { BoxSizing, Rect } from '../types/type-rect.js';
import InspectorOverlay, {
  type InspectorOverlayRef,
} from './InspectorOverlay.js';

export class Overlay {
  window: Window;
  private overlay: HTMLDivElement;
  private overlayInstance: RefObject<InspectorOverlayRef | null> = createRef();
  private root: ReturnType<typeof createRoot> | null = null;

  constructor() {
    // Find the root window, because overlays are positioned relative to it.
    const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;

    const doc = currentWindow.document;
    this.overlay = document.createElement(
      InspectorOverlayTagName
    ) as HTMLDivElement;
    doc.documentElement.appendChild(this.overlay);

    this.root = createRoot(this.overlay);
    this.root.render(
      <ShadowRoot>
        <InspectorOverlay ref={this.overlayInstance} />
      </ShadowRoot>
    );
  }

  public inspect<Element extends HTMLElement = HTMLElement>({
    element,
    title,
    info,
    getBoxSizing = getElementDimensions,
    getBoundingRect: _getBoundingRect = getBoundingRect,
  }: {
    element?: Element;
    title?: string;
    info?: string;
    /**
     * default as `window.getComputedStyle(element)`
     */
    getBoxSizing?: (element: Element) => BoxSizing;
    /**
     * default as `element.getBoundingClientRect()`
     */
    getBoundingRect?: (element: Element) => Rect;
  }) {
    if (!this.overlayInstance) return;
    return this.overlayInstance.current?.inspect?.({
      element,
      title,
      info,
      getBoundingRect: getBoundingRect ?? getBoundingRect,
      getBoxSizing: getBoxSizing ?? getElementDimensions,
    });
  }

  public async hide() {
    if (!this.overlayInstance) return;
    await this.overlayInstance.current?.hide?.();
  }

  public remove() {
    if (this.root) {
      this.root.unmount();
    }
    this.overlay.remove();
  }
}
