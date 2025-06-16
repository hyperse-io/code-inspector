import { forwardRef, useMemo } from 'react';
import { Overlay } from '../components/index.js';
import type { BoxSizing, Rect } from '../types/type-rect.js';

export interface OverlayRectProps {
  className?: string;
  boundingRect?: Rect;
  boxSizing?: BoxSizing;
}

const OverlayRect = forwardRef<HTMLDivElement, OverlayRectProps>(
  ({ className, boundingRect, boxSizing }, ref) => {
    const position = useMemo(() => {
      const x =
        (boundingRect?.x ?? 0) - Math.max(boxSizing?.marginLeft ?? 0, 0);
      const y = (boundingRect?.y ?? 0) - Math.max(boxSizing?.marginTop ?? 0, 0);
      return { translate: `${x}px ${y}px` };
    }, [boundingRect, boxSizing]);

    const getBoxStyle = (type: 'margin' | 'padding' | 'border') => {
      if (!boxSizing) return { display: 'none' };
      return {
        borderTopWidth: `${Math.max(boxSizing[`${type}Top`] ?? 0, 0)}px`,
        borderLeftWidth: `${Math.max(boxSizing[`${type}Left`] ?? 0, 0)}px`,
        borderRightWidth: `${Math.max(boxSizing[`${type}Right`] ?? 0, 0)}px`,
        borderBottomWidth: `${Math.max(boxSizing[`${type}Bottom`] ?? 0, 0)}px`,
      };
    };

    const contentStyle = useMemo(() => {
      if (!boundingRect || !boxSizing) return { display: 'none' };
      return {
        height: `${
          boundingRect.height -
          boxSizing.borderTop -
          boxSizing.borderBottom -
          boxSizing.paddingTop -
          boxSizing.paddingBottom
        }px`,
        width: `${
          boundingRect.width -
          boxSizing.borderLeft -
          boxSizing.borderRight -
          boxSizing.paddingLeft -
          boxSizing.paddingRight
        }px`,
      };
    }, [boundingRect, boxSizing]);

    return (
      <Overlay.OverlayRectRoot
        ref={ref}
        style={{ translate: position.translate }}
        className={className}
      >
        <Overlay.OverlayRectMargin style={getBoxStyle('margin')}>
          <Overlay.OverlayRectBorder style={getBoxStyle('border')}>
            <Overlay.OverlayRectPadding style={getBoxStyle('padding')}>
              <Overlay.OverlayRectContent style={contentStyle} />
            </Overlay.OverlayRectPadding>
          </Overlay.OverlayRectBorder>
        </Overlay.OverlayRectMargin>
      </Overlay.OverlayRectRoot>
    );
  }
);

OverlayRect.displayName = 'OverlayRect';

export default OverlayRect;
