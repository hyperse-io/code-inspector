import { styled } from 'styled-components';

const isSafari = /^(?:(?!chrome|android).)*safari/i.test(navigator.userAgent);

export const OverlayRoot = styled.div<{
  display: 'none' | 'block';
}>`
  position: fixed;
  z-index: 10000000;
  pointer-events: none;
  display: ${(props) => props.display};
`;

export const OverlayRectRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  cursor: default;
  box-sizing: border-box;
`;

export const OverlayRectMargin = styled.div`
  border: 1px solid rgba(246, 178, 107, 0.66);
`;

export const OverlayRectBorder = styled.div`
  border: 1px solid rgba(255, 229, 153, 0.66);
`;

export const OverlayRectPadding = styled.div`
  border: 1px solid rgba(147, 196, 125, 0.55);
`;

export const OverlayRectContent = styled.div`
  background-color: rgba(111, 168, 220, 0.66);
`;

export const OverlayTipRoot = styled.div<{ display?: 'block' | 'none' }>`
  --corner-radius: 6px;
  --inspector-tip-color-bg: #333740;
  --color-shadow-1: #aaa1;
  --color-shadow-2: #aaaaaa16;

  position: fixed;
  top: 0;
  left: 0;
  flex-flow: column;
  font-family:
    'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  white-space: nowrap;
  max-width: 97vw;
  box-sizing: border-box;
  user-select: none;
  overflow: hidden;

  ${isSafari
    ? `filter: drop-shadow(0 0 1px #eee9);`
    : `filter: drop-shadow(0 0 1px #eee9) drop-shadow(2px 10px 12px var(--color-shadow-1)) drop-shadow(-3px 3px 6px var(--color-shadow-2)) drop-shadow(0 -6px 8px var(--color-shadow-1));`}
`;

export const OverlayInfoRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  border-radius: var(--corner-radius);
  background-color: var(--inspector-tip-color-bg);
  padding: 6px 12px;
`;

export const OverlayInfoName = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  justify-content: center;
  overflow: hidden;
  margin-right: auto;
`;

export const OverlaySeparator = styled.div`
  flex: 0 0 auto;
  width: 1px;
  min-height: 18px;
  margin-block: 8px;
  margin-inline: 14px;
  background-color: #999;
`;

export const OverlayInfoTitle = styled.div`
  display: flex;
  align-items: center;
  max-width: 750px;
  margin-block: 4px;
  color: #ee78e6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const OverlayInfoSubtitle = styled.div`
  display: flex;
  align-items: center;
  max-width: 750px;
  margin-block: 4px;
  color: #ee78e6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  direction: rtl;
  text-align: left;
`;

export const OverlaySize = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  color: #d7d7d7;
`;

export const OverlayCornerHint = styled.div`
  --corner-hint-height: 16px;
  flex-grow: 0;
  width: min-content;
  overflow: visible;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1px;
  padding-inline: 12px 10px;
  height: var(--corner-hint-height);
  background-color: var(--inspector-tip-color-bg);
  color: #ccc;
  font-size: 9px;
  font-weight: 400;
  border-radius: 0 0 var(--corner-radius) var(--corner-radius);

  &::before {
    position: absolute;
    top: calc(-1 * var(--corner-radius));
    left: 0;
    width: var(--corner-radius);
    height: var(--corner-radius);
    display: block;
    background: var(--inspector-tip-color-bg);
    content: '';
  }

  &::after {
    position: absolute;
    top: calc(-1 * var(--corner-radius));
    right: calc(-1 * var(--corner-radius));
    width: calc(2 * var(--corner-radius));
    height: calc(2 * var(--corner-radius));
    display: block;
    background: radial-gradient(
      circle at bottom right,
      transparent 35%,
      var(--inspector-tip-color-bg) 40%
    );
    content: '';
  }
`;
