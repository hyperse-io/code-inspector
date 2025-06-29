import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { Overlay } from '../components/index.js';
import {
  getViewSpaceBox,
  restraintTipPosition,
} from '../helpers/helper-rect.js';
import type { BoxSizing, Rect } from '../types/type-rect.js';

export interface OverlayTipProps {
  className?: string;
  title: string;
  info?: string;
  boundingRect?: Rect;
  /** viewport space box relative of client */
  spaceBox?: Rect;
  boxSizing?: Pick<BoxSizing, `margin${'Top' | 'Left' | 'Right' | 'Bottom'}`>;
  showCornerHint?: boolean;
  cornerHintText?: string;
}

const OverlayTip = ({
  title,
  info,
  className,
  boundingRect,
  boxSizing,
  spaceBox,
  showCornerHint,
  cornerHintText = 'Right-click to show list.',
}: OverlayTipProps) => {
  const tipSpaceBox = () => spaceBox ?? getViewSpaceBox();
  const containerRef = useRef<HTMLDivElement>(null);
  const hidden = !boundingRect || !boxSizing;
  const infoDisplay = info ? 'block' : 'none';
  const width = Math.round(boundingRect?.width ?? 0);
  const height = Math.round(boundingRect?.height ?? 0);

  const [position, setPosition] = useState<Pick<CSSProperties, 'translate'>>({
    translate: '0px 0px',
  });

  const outerBox = (): Rect => {
    if (!boundingRect || !boxSizing) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };
    }

    const top = boundingRect.y - Math.max(boxSizing.marginTop, 0);
    const left = boundingRect.x - Math.max(boxSizing.marginLeft, 0);
    const right =
      boundingRect.x + boundingRect.width + Math.max(boxSizing.marginRight, 0);
    const bottom =
      boundingRect.y +
      boundingRect.height +
      Math.max(boxSizing.marginBottom, 0);

    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top,
    };
  };

  useEffect(() => {
    let mounted = true;
    if (!containerRef.current) return;
    restraintTipPosition({
      elementBox: outerBox(),
      spaceBox: tipSpaceBox(),
      tipSize: containerRef.current!.getBoundingClientRect().toJSON(),
    }).then((position) => {
      if (mounted) {
        setPosition({
          translate: `${position.left}px ${position.top}px`,
        });
      }
    });
    return () => {
      mounted = false;
    };
  }, [containerRef, boundingRect, boxSizing, spaceBox]);

  return (
    <Overlay.OverlayTipRoot
      ref={containerRef}
      className={className}
      style={{
        display: hidden ? 'none' : 'flex',
        translate: position.translate,
        transform: `translate(${position.translate})`,
      }}
    >
      <Overlay.OverlayInfoRow>
        <Overlay.OverlayInfoName>
          <Overlay.OverlayInfoTitle>&lrm;{title}&lrm;</Overlay.OverlayInfoTitle>
          <Overlay.OverlayInfoSubtitle style={{ display: infoDisplay }}>
            &lrm;{info}&lrm;
          </Overlay.OverlayInfoSubtitle>
        </Overlay.OverlayInfoName>
        <Overlay.OverlaySeparator />
        <Overlay.OverlaySize>
          {width}px × {height}px
        </Overlay.OverlaySize>
      </Overlay.OverlayInfoRow>
      {showCornerHint && (
        <Overlay.OverlayCornerHint>{cornerHintText}</Overlay.OverlayCornerHint>
      )}
    </Overlay.OverlayTipRoot>
  );
};

export default OverlayTip;
