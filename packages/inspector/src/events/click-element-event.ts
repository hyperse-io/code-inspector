import type { TrustedEditor } from '@hyperse/inspector-common';
import { gotoServerEditor } from '../helpers/helper-editor.js';
import { useEffectEvent } from '../hooks/use-effect-event.js';
import type { InspectAgent } from '../types/type-agent.js';
import type { CodeInfo } from '../types/type-code.js';
import type {
  ElementInInspectAgents,
  InspectorProps,
} from '../types/type-inspector.js';

export const clickElementEvent = <
  InspectAgents extends InspectAgent<any>[],
  Element extends ElementInInspectAgents<InspectAgents> =
    ElementInInspectAgents<InspectAgents>,
>(options: {
  agentRef: React.RefObject<InspectAgent<Element> | undefined>;
  onClickElement: InspectorProps<InspectAgents, Element>['onClickElement'];
  onInspectElement: InspectorProps<InspectAgents, Element>['onInspectElement'];
  onInterceptClick?: () => void;
  customLaunchEditorEndpoint?: string;
}) => {
  const {
    agentRef,
    onInterceptClick,
    onClickElement,
    onInspectElement,
    customLaunchEditorEndpoint,
  } = options;

  return useEffectEvent(
    ({
      agent,
      element,
      pointer,
      nameInfo,
      codeInfo,
      editor,
    }: {
      agent: InspectAgent<Element>;
      element?: Element;
      pointer?: PointerEvent;
      nameInfo?: {
        /** element's constructor name */
        name: string;
        /** display to describe the element as short */
        title: string;
      };
      codeInfo?: CodeInfo;
      editor?: TrustedEditor;
    }) => {
      if (agent !== agentRef.current) {
        return;
      }

      // only need stop event when it trigger by current agent
      pointer?.preventDefault();
      pointer?.stopPropagation();
      pointer?.stopImmediatePropagation();

      agent.removeIndicate();

      if (!element) {
        return;
      }

      nameInfo ??= agent.getNameInfo(element);
      codeInfo ??= agent.findCodeInfo(element);
      const fiber = agent.findElementFiber?.(element);

      onInterceptClick?.();

      onClickElement?.({
        element,
        fiber,
        codeInfo,
        name: nameInfo?.name,
        editor,
      });

      if (fiber && codeInfo) {
        onInspectElement?.({
          element,
          fiber,
          codeInfo,
          name: nameInfo?.name ?? nameInfo?.title ?? '',
          editor,
        });
      }

      if (codeInfo && !onInspectElement) {
        gotoServerEditor(codeInfo, { editor, customLaunchEditorEndpoint });
      }
    }
  );
};
