import { css, styled } from 'styled-components';

export const InspectPanelRoot = styled.div`
  position: fixed;
  z-index: 10001000;
`;

export const PanelRoot = styled.div`
  width: 300px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #333740;
  font-family:
    'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 12px;
  position: relative;
`;

export const PanelDragHandle = styled.div`
  position: absolute;
  top: 0;
  right: -20px;
  z-index: 10001001;
  border-radius: 4px;
  background-color: #333740;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export const PanelActionLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  padding: 4px;
`;

export const PanelActionButton = styled.button`
  cursor: pointer;
  padding: 6px 8px;
  font-size: 14px;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s ease-in-out;
  }
`;

export const PanelContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 24rem;
  overflow-y: auto;
  background-color: transparent;
  padding: 0.5rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const PanelListItemActionLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.1rem;
  opacity: 0;
`;

export const PanelListItem = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    ${PanelListItemActionLayout} {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

export const PanelListItemTitle = styled.span`
  flex: 1;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 2px;
`;

export const PanelListItemTag = styled.span`
  color: rgba(255, 255, 255, 0.6);
`;

export const PanelListItemDescription = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.75rem;
`;

export const PanelListItemActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: scale(1.2);
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const PanelListItemRow = styled.div`
  display: flex;
  flex-direction: row;
`;
