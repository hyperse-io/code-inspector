import { useRef } from 'react';
import type { TrustedEditor } from '@hyperse/inspector-common';
import {
  InspectContextPanel,
  type InspectContextPanelShowParams,
} from '@hyperse/inspector-component';
import {
  type DOMElement,
  domInspectAgent,
} from '../agent/dom-inspect-agent.js';
import { clickElementEvent } from '../events/click-element-event.js';
import { hoverElementEvent } from '../events/hover-element-event.js';
import { pointerDownEvent } from '../events/pointer-down-event.js';
import { elementsChainGenerator } from '../helpers/helper-elements-chain-generator.js';
import type { InspectAgent } from '../types/type-agent.js';
import type {
  ElementInInspectAgents,
  InspectElementItem,
  InspectorProps,
} from '../types/type-inspector.js';
import { useEffectEvent } from './use-effect-event.js';
import { useRecordPointer } from './use-record-pointer.js';

const defaultInspectAgents: InspectAgent<any>[] = [domInspectAgent];

const contextPanelSizeLimit: InspectContextPanelShowParams['sizeLimit'] = {
  minWidth: 160,
  minHeight: 160,
  maxWidth: 800,
  maxHeight: 800,
};

export const useStartInspecting = <
  InspectAgents extends InspectAgent<any>[] = InspectAgent<DOMElement>[],
  Element extends ElementInInspectAgents<InspectAgents> =
    ElementInInspectAgents<InspectAgents>,
>(
  props: InspectorProps<InspectAgents>,
  ondDeactivate: () => void
) => {
  const {
    onHoverElement,
    onClickElement,
    onInspectElement,
    ContextPanel = InspectContextPanel,
    disable = process.env.NODE_ENV !== 'development',
    inspectAgents = defaultInspectAgents,
    customLaunchEditorEndpoint,
  } = props;

  const pointerRef = useRecordPointer({ disable });
  const agentRef = useRef<
    InspectAgent<ElementInInspectAgents<InspectAgents>> | undefined
  >(undefined);
  const contextPanelRef = useRef<
    InspectContextPanel<InspectElementItem<Element>> | undefined
  >(undefined);

  const handleHoverElement = hoverElementEvent({
    agentRef,
    onHoverElement,
  });

  const handlePointerDown = pointerDownEvent({
    agentRef,
    handleHoverElement,
  });

  const handleClickElement = clickElementEvent({
    agentRef,
    onClickElement,
    onInspectElement,
    onInterceptClick: ondDeactivate,
    customLaunchEditorEndpoint,
  });

  const onContextMenuEvent = useEffectEvent(async (event: MouseEvent) => {
    if (contextPanelRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    inspectAgents.forEach((agent) => {
      agent.deactivate();
    });

    agentRef.current?.removeIndicate();
    agentRef.current = undefined;

    const layers = (
      await Promise.all(
        inspectAgents
          .filter((agent) => agent.getTopElementsFromPointer)
          .map(async (agent) => {
            const elements = await agent.getTopElementsFromPointer!(event);
            return elements.map((element) => ({
              agent,
              element,
            }));
          })
      )
    ).flat();

    const renderLayers = layers.map(
      ({ agent, element }) =>
        () =>
          elementsChainGenerator({
            agent,
            agents: inspectAgents,
            element,
            generateElement: (agent, element) => agent.getRenderChain(element),
          })
    );

    const sourceLayers = layers.map(
      ({ agent, element }) =>
        () =>
          elementsChainGenerator({
            agent,
            agents: inspectAgents,
            element,
            generateElement: (agent, element) => agent.getSourceChain(element),
          })
    );

    const onHoverToIndicate = (item: InspectElementItem<Element> | null) => {
      if (!item?.element) {
        agentRef.current?.removeIndicate();
        agentRef.current = undefined;
        return;
      }

      handleHoverElement({
        agent: item.agent,
        element: item.element,
        nameInfo: {
          name: item.title,
          title: item.title,
        },
        codeInfo: item.codeInfo,
      });
    };

    const onClickToEditor = ({
      item,
      editor,
    }: {
      item: InspectElementItem<Element>;
      editor?: TrustedEditor;
    }) => {
      if (!item?.element) {
        return;
      }
      if (agentRef.current !== item.agent) {
        agentRef.current?.removeIndicate();
        agentRef.current = item.agent;
      }
      handleClickElement({
        agent: item.agent,
        element: item.element,
        codeInfo: item.codeInfo,
        nameInfo: {
          name: item.title,
          title: item.title,
        },
        editor,
      });
    };

    contextPanelRef.current = new ContextPanel();

    setTimeout(() => {
      contextPanelRef.current?.show({
        initialPosition: {
          x: event.clientX,
          y: event.clientY,
        },
        sizeLimit: contextPanelSizeLimit,
        onClickOutside: ondDeactivate,
        panelParams: {
          renderLayers,
          sourceLayers,
          onHoverItem: onHoverToIndicate,
          onClickItem: (item) => {
            onClickToEditor({ item });
          },
          onClickEditor: onClickToEditor,
        },
      });
    }, 0);
  });

  const startInspecting = useEffectEvent(() => {
    inspectAgents.forEach((agent) => {
      agent.activate({
        onHover: (params) =>
          handleHoverElement({
            ...params,
            agent,
          }),
        onPointerDown: (params) =>
          handlePointerDown({
            ...params,
            agent,
          }),
        onClick: (params) =>
          handleClickElement({
            ...params,
            agent,
          }),
      });
    });

    window.addEventListener('contextmenu', onContextMenuEvent, {
      capture: true,
    });

    if (!pointerRef.current) {
      return;
    }

    Promise.all(
      inspectAgents.map((agent) =>
        agent.getTopElementFromPointer?.(pointerRef.current!)
      )
    ).then((elements) => {
      for (const [index, element] of elements.entries()) {
        if (element) {
          handleHoverElement({
            agent: inspectAgents[index],
            element,
            pointer: pointerRef.current!,
          });
          return;
        }
      }
    });
  });

  return {
    pointerRef,
    agentRef,
    contextPanelRef,
    startInspecting,
    onContextMenuEvent,
  };
};
