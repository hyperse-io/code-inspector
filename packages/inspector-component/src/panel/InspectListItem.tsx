import { TrustedEditor } from '@hyperse/inspector-common';
import { Panel } from '../components/index.js';
import { copyText } from '../helpers/helper-copy-text.js';
import type { ElementItem } from '../types/type-element-item.js';

export interface InspectListItemProps<Item extends ElementItem = ElementItem> {
  item: Item;
  index: number;
  onClickItem?: (item: Item) => void;
  onClickEditor?: (params: {
    editor: TrustedEditor;
    item: Item;
  }) => void | Promise<void>;
  onHoverItem?: (item: Item) => void;
}

export const InspectListItem = <Item extends ElementItem = ElementItem>({
  item,
  index,
  onClickItem,
  onClickEditor,
  onHoverItem,
}: InspectListItemProps<Item>) => {
  return (
    <Panel.PanelListItem
      onClick={() => onClickItem?.(item)}
      onPointerEnter={() => onHoverItem?.(item)}
    >
      <Panel.PanelListItemRow>
        <Panel.PanelListItemTitle>
          {item.title || '(anonymous)'}
          {item?.tags?.map((tag, index) => (
            <Panel.PanelListItemTag key={index}>
              {typeof tag === 'string' ? tag : tag.label}
            </Panel.PanelListItemTag>
          ))}
        </Panel.PanelListItemTitle>
        <span>#{index + 1}</span>
      </Panel.PanelListItemRow>
      <Panel.PanelListItemRow>
        <Panel.PanelListItemDescription>
          &lrm;{item.subtitle || '—'}&lrm;
        </Panel.PanelListItemDescription>
        <Panel.PanelListItemActionLayout>
          {item.subtitle && (
            <Panel.PanelListItemActionButton
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                copyText(item.subtitle!);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z" />
                  <path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1" />
                </g>
              </svg>
            </Panel.PanelListItemActionButton>
          )}
          <Panel.PanelListItemActionButton
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              onClickEditor?.({
                item: item,
                editor: TrustedEditor.VSCode,
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 32"
            >
              <path
                fill="#2196f3"
                d="M24.003 2L12 13.303L4.84 8L2 10l6.772 6L2 22l2.84 2L12 18.702L24.003 30L30 27.087V4.913ZM24 9.434v13.132L15.289 16Z"
                strokeWidth="1"
                stroke="#2196f3"
              />
            </svg>
          </Panel.PanelListItemActionButton>
          <Panel.PanelListItemActionButton
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              onClickEditor?.({
                item: item,
                editor: TrustedEditor.Cursor,
              });
            }}
          >
            <svg width="16" height="16" viewBox="0 0 260 260">
              <image
                width="260"
                height="260"
                xlinkHref="data:image/png;base64,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"
              />
            </svg>
          </Panel.PanelListItemActionButton>
        </Panel.PanelListItemActionLayout>
      </Panel.PanelListItemRow>
    </Panel.PanelListItem>
  );
};
