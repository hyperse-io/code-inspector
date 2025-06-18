import { useEffect, useRef, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

const ShadowRoot = ({ children }: { children: ReactNode }) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current || hostRef.current.shadowRoot) return;

    const shadowRoot = hostRef.current.attachShadow({ mode: 'open' });
    
    const container = document.createElement('div');
    shadowRoot.appendChild(container);

    const root = createRoot(container);
    root.render(<StyleSheetManager target={shadowRoot}>{children}</StyleSheetManager>);

    return () => root.unmount();
  }, []);

  return <div ref={hostRef} />;
};

export default ShadowRoot;