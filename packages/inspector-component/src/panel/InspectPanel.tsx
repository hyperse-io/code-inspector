import { useMemo, useState } from 'react';
import type { TrustedEditor } from '@hyperse/inspector-common';
import { Panel } from '../components/index.js';
import {
  ElementChainMode,
  type ElementInfoGeneratorGetter,
  type ElementItem,
} from '../types/type-element-item.js';
import {
  InspectListItem,
  type InspectListItemProps,
} from './InspectListItem.js';

export type InspectPanelProps<Item extends ElementItem = ElementItem> = {
  renderLayers: ElementInfoGeneratorGetter<Item>[];
  sourceLayers: ElementInfoGeneratorGetter<Item>[];
  onHoverItem?: (item: Item | null) => void;
  onClickItem?: (item: Item) => void;
  onClickEditor?: (params: {
    item: Item;
    editor: TrustedEditor;
  }) => void | Promise<void>;
};

export const InspectPanel = <Item extends ElementItem = ElementItem>(
  props: InspectPanelProps<Item>
) => {
  const {
    renderLayers,
    sourceLayers,
    onHoverItem,
    onClickItem,
    onClickEditor,
  } = props;
  const [chainMode, setChainMode] = useState<ElementChainMode>(
    ElementChainMode.Render
  );
  const renderList = useMemo(() => {
    return renderLayers.reduce<InspectListItemProps<Item>[]>(
      (acc, layer, index) => {
        const list = layer();
        for (const element of list) {
          acc.push({
            index,
            item: element,
            onHoverItem,
            onClickItem,
            onClickEditor,
          });
        }
        return acc;
      },
      []
    );
  }, [renderLayers]);

  const sourceList = useMemo(() => {
    return sourceLayers.reduce<InspectListItemProps<Item>[]>(
      (acc, layer, index) => {
        const list = layer();
        for (const element of list) {
          acc.push({
            index,
            item: element,
            onHoverItem,
            onClickItem,
            onClickEditor,
          });
        }
        return acc;
      },
      []
    );
  }, [renderLayers]);

  return (
    <Panel.PanelRoot>
      <Panel.PanelDragHandle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="white"
            fillRule="evenodd"
            d="M5.5 4.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M5.5 7.995a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M5.5 11.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"
            clipRule="evenodd"
          />
        </svg>
      </Panel.PanelDragHandle>
      <Panel.PanelActionLayout>
        <Panel.PanelActionButton
          style={{
            color:
              chainMode === ElementChainMode.Render
                ? '#ee78e6'
                : 'rgba(255, 255, 255, 0.9)',
          }}
          onClick={() => setChainMode(ElementChainMode.Render)}
        >
          Render Chain
        </Panel.PanelActionButton>
        <Panel.PanelActionButton
          style={{
            color:
              chainMode === ElementChainMode.Source
                ? '#ee78e6'
                : 'rgba(255, 255, 255, 0.9)',
          }}
          onClick={() => setChainMode(ElementChainMode.Source)}
        >
          Source Chain
        </Panel.PanelActionButton>
      </Panel.PanelActionLayout>
      {chainMode === ElementChainMode.Render && (
        <Panel.PanelContentLayout>
          {renderList?.map((item, index) => (
            <InspectListItem<Item> key={index} {...item} />
          ))}
        </Panel.PanelContentLayout>
      )}

      {chainMode === ElementChainMode.Source && (
        <Panel.PanelContentLayout>
          {sourceList?.map((item, index) => (
            <InspectListItem<Item> key={index} {...item} />
          ))}
        </Panel.PanelContentLayout>
      )}
    </Panel.PanelRoot>
  );
};
