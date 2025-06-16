import { forwardRef, useImperativeHandle, useState } from 'react';
import { Overlay } from '../components/index.js';
import { InspectorOverlayTagName } from '../constant.js';
import type { getElementDimensions } from '../helpers/helper-element-dimensions.js';
import type { getBoundingRect } from '../helpers/helper-rect.js';
import type { BoxSizing, Rect } from '../types/type-rect.js';
import OverlayRect from './OverlayRect.js';
import OverlayTip from './OverlayTip.js';

export interface InspectorOverlayRef {
  inspect: <Element extends HTMLElement>(value: {
    element?: Element;
    title?: string;
    info?: string;
    tipHidden?: boolean;
    getBoxSizing?: (element: Element) => BoxSizing;
    getBoundingRect?: (element: Element) => Rect;
  }) => void;
  hide: () => Promise<void>;
}

const InspectorOverlay = forwardRef<InspectorOverlayRef>((_, ref) => {
  const [inspectInfo, setInspectInfo] = useState<{
    display: 'block' | 'none';
    title: string;
    info: string;
    tipHidden?: boolean;
    boundingRect?: ReturnType<typeof getBoundingRect>;
    boxSizing?: ReturnType<typeof getElementDimensions>;
    hasInspectContextPanel?: boolean;
  }>({
    display: 'none',
    title: '',
    info: '',
  });

  useImperativeHandle(ref, () => ({
    inspect: (props) => {
      if (!props.element) {
        setInspectInfo((prev) => ({ ...prev, display: 'none' }));
        return;
      }

      const boxSizing = props.getBoxSizing?.(props.element);
      const boundingRect = props.getBoundingRect?.(props.element);
      const hasInspectContextPanel =
        document.getElementsByTagName(InspectorOverlayTagName).length > 0;

      setInspectInfo({
        display: 'block',
        title: props.title ?? '',
        info: props.info ?? '',
        tipHidden: props.tipHidden,
        boundingRect,
        boxSizing,
        hasInspectContextPanel,
      });
    },
    hide: async () => {
      setInspectInfo((prev) => ({ ...prev, display: 'none' }));
    },
  }));

  return (
    <Overlay.OverlayRoot display={inspectInfo.display}>
      <OverlayRect
        boundingRect={inspectInfo.boundingRect}
        boxSizing={inspectInfo.boxSizing}
      />
      <OverlayTip
        title={inspectInfo.title}
        info={inspectInfo.info}
        boundingRect={inspectInfo.boundingRect}
        boxSizing={inspectInfo.boxSizing}
        showCornerHint={!inspectInfo.hasInspectContextPanel}
      />
    </Overlay.OverlayRoot>
  );
});

InspectorOverlay.displayName = 'InspectorOverlay';

export default InspectorOverlay;
