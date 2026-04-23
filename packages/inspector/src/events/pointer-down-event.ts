import { useEffectEvent } from '../hooks/use-effect-event.js';
import type { InspectAgent } from '../types/type-agent.js';
import type { ElementInInspectAgents } from '../types/type-inspector.js';
import type { hoverElementEvent } from './hover-element-event.js';

export const pointerDownEvent = <
  InspectAgents extends InspectAgent<any>[],
  Element extends ElementInInspectAgents<InspectAgents> =
    ElementInInspectAgents<InspectAgents>,
>(options: {
  agentRef: React.RefObject<InspectAgent<Element> | undefined>;
  handleHoverElement: ReturnType<typeof hoverElementEvent>;
  onInterceptPointerDown?: () => void;
}) => {
  const { agentRef, handleHoverElement, onInterceptPointerDown } = options;

  return useEffectEvent(
    ({
      agent,
      element,
      pointer,
    }: {
      agent: InspectAgent<ElementInInspectAgents<InspectAgents>>;
      element?: ElementInInspectAgents<InspectAgents>;
      pointer: PointerEvent;
    }) => {
      if (agent !== agentRef.current) {
        return;
      }

      // only need stop event when it trigger by current agent
      pointer.preventDefault();
      pointer.stopPropagation();
      pointer.stopImmediatePropagation();

      if (element) {
        onInterceptPointerDown?.();

        handleHoverElement({
          agent,
          element,
          pointer,
        });
      }
    }
  );
};
