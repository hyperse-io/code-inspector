import type { InspectContextPanel } from '@hyperse/inspector-component';
import type { DOMElement } from '../agent/dom-inspect-agent.js';
import type { InspectAgent } from '../types/type-agent.js';
import type {
  ElementInInspectAgents,
  InspectElementItem,
} from '../types/type-inspector.js';
import { useEffectEvent } from './use-effect-event.js';

export const useStopInspecting = <
  InspectAgents extends InspectAgent<any>[] = InspectAgent<DOMElement>[],
  Element extends ElementInInspectAgents<InspectAgents> =
    ElementInInspectAgents<InspectAgents>,
>(options: {
  agentRef: React.RefObject<InspectAgent<Element> | undefined>;
  inspectAgents: InspectAgent<any>[];
  contextPanelRef: React.RefObject<
    InspectContextPanel<InspectElementItem<Element>> | undefined
  >;
  onContextMenuEvent: (event: MouseEvent) => void;
}) => {
  const { agentRef, inspectAgents, contextPanelRef, onContextMenuEvent } =
    options;

  const stopInspecting = useEffectEvent(() => {
    agentRef.current?.removeIndicate();
    inspectAgents.forEach((agent) => {
      agent.deactivate();
    });
    agentRef.current = undefined;

    contextPanelRef.current?.hide();
    contextPanelRef.current?.remove();
    contextPanelRef.current = undefined;
    window.removeEventListener('contextmenu', onContextMenuEvent, {
      capture: true,
    });
  });

  return { stopInspecting };
};
