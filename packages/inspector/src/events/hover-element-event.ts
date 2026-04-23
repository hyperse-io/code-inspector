import { useEffectEvent } from '../hooks/use-effect-event.js';
import type { InspectAgent } from '../types/type-agent.js';
import type { CodeInfo } from '../types/type-code.js';
import type {
  ElementInInspectAgents,
  InspectorProps,
} from '../types/type-inspector.js';

export const hoverElementEvent = <
  InspectAgents extends InspectAgent<any>[],
  Element extends ElementInInspectAgents<InspectAgents> =
    ElementInInspectAgents<InspectAgents>,
>(options: {
  agentRef: React.RefObject<InspectAgent<Element> | undefined>;
  onHoverElement: InspectorProps<InspectAgents, Element>['onHoverElement'];
  onInterceptHover?: () => void;
}) => {
  const { agentRef, onHoverElement, onInterceptHover } = options;

  return useEffectEvent(
    ({
      agent,
      element,
      nameInfo,
      codeInfo,
      pointer,
    }: {
      agent: InspectAgent<Element>;
      element: Element;
      pointer?: PointerEvent;
      nameInfo?: {
        /** element's constructor name */
        name: string;
        /** display to describe the element as short */
        title: string;
      };
      codeInfo?: CodeInfo;
    }) => {
      if (agent !== agentRef.current) {
        agentRef.current?.removeIndicate();
        agentRef.current = agent;
      }

      nameInfo ??= agent.getNameInfo(element);
      agent.indicate({
        element,
        codeInfo,
        pointer,
        name: nameInfo?.name,
        title: nameInfo?.title,
      });

      if (!onHoverElement) {
        return;
      }

      codeInfo ??= agent.findCodeInfo(element);
      const fiber = agent.findElementFiber?.(element);

      onInterceptHover?.();

      onHoverElement({
        element,
        fiber,
        codeInfo,
        name: nameInfo?.name ?? nameInfo?.title ?? '',
      });
    }
  );
};
