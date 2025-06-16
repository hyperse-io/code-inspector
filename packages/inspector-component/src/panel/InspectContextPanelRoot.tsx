import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { Rect } from '@floating-ui/core';
import { Panel } from '../components/index.js';
import {
  getViewSpaceBox,
  restraintTipPosition,
} from '../helpers/helper-rect.js';
import type { ElementItem } from '../types/type-element-item.js';
import type { Point } from '../types/type-rect.js';
import { InspectPanel, type InspectPanelProps } from './InspectPanel.js';

export type InspectContextPanelRootProps<
  Item extends ElementItem = ElementItem,
> = {} & InspectPanelProps<Item>;

export interface DragPanelParams {
  initialPosition?: Point;
  /** viewport space box relative of client */
  spaceBox?: Rect;
  sizeLimit?: SizeLimit;
}

interface SizeLimit {
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export interface InspectContextPanelShowParams<
  Item extends ElementItem = ElementItem,
> extends DragPanelParams {
  panelParams: InspectContextPanelRootProps<Item>;
}

export interface InspectContextPanelRootRef<
  Item extends ElementItem = ElementItem,
> {
  show: (params: InspectContextPanelShowParams<Item>) => void;
  hide: () => void;
}

let longPressTimer: NodeJS.Timeout | null = null;

const InspectContextPanelRoot = <Item extends ElementItem = ElementItem>() => {
  return forwardRef<InspectContextPanelRootRef<Item>>((_, ref) => {
    const floatingRef = useRef<HTMLDivElement>(null);
    const [display, setDisplay] = useState<'block' | 'none'>('none');
    const [panelData, setPanelData] =
      useState<InspectContextPanelRootProps<Item>>();

    // Add drag state
    const isDragging = useRef(false);
    const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const panelStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    // Cleanup event listeners on unmount
    useEffect(() => {
      // Add event listeners for mouse move and up
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        if (longPressTimer) {
          clearTimeout(longPressTimer);
        }
        longPressTimer = null;
      };
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!floatingRef.current) return;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      isDragging.current = true;
      dragStartPos.current = { x: e.clientX, y: e.clientY };
      const rect = floatingRef.current!.getBoundingClientRect();
      panelStartPos.current = { x: rect.left, y: rect.top };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !floatingRef.current) return;

      e.preventDefault();
      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;

      const newX = panelStartPos.current.x + deltaX;
      const newY = panelStartPos.current.y + deltaY;

      Object.assign(floatingRef.current.style, {
        top: `${newY}px`,
        left: `${newX}px`,
      });
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
      isDragging.current = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    useImperativeHandle(ref, () => ({
      show: (params) => {
        if (!floatingRef.current) {
          return;
        }
        setDisplay('block');
        const pointerPadding = 5;
        restraintTipPosition({
          elementBox: {
            x: params.initialPosition?.x ?? 0 - pointerPadding,
            y: params.initialPosition?.y ?? 0 - pointerPadding,
            width: pointerPadding,
            height: pointerPadding,
          },
          spaceBox: getViewSpaceBox(),
          tipSize: floatingRef
            .current!.getBoundingClientRect()
            .toJSON() as Rect,
        }).then((position) => {
          Object.assign(floatingRef.current!.style, {
            top: `${position.top}px`,
            left: `${position.left}px`,
          });
        });

        setPanelData(params.panelParams);
      },
      hide: () => {
        setDisplay('none');
        setPanelData(undefined);
      },
    }));

    return (
      <>
        <Panel.InspectPanelRoot
          ref={floatingRef}
          onMouseDown={handleMouseDown}
          onClick={stopPropagation}
          data-draggable-block
          style={{
            display: display,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            position: 'fixed',
            touchAction: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          {panelData && <InspectPanel {...panelData} />}
        </Panel.InspectPanelRoot>
      </>
    );
  });
};

const stopPropagation = (e: any) => e.stopPropagation();

InspectContextPanelRoot.displayName = 'InspectContextPanelRoot';

export default InspectContextPanelRoot;
