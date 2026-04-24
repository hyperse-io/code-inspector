'use client';

// https://gist.github.com/janily/04d7fb0861e053d4679b38743ffc05a7
import type { ReactNode } from 'react';
import { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const Shadow = ({
  mode,
  children,
  ...props
}: {
  mode: 'open' | 'closed';
  children: ReactNode;
}) => {
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);
  const modeRef = useRef(mode);
  modeRef.current = mode;

  const setHostRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) {
      setShadowRoot(null);
      return;
    }
    try {
      const root = node.attachShadow({ mode: modeRef.current });
      setShadowRoot(root);
    } catch (error) {
      console.warn('Failed to attach shadow root:', error);
    }
  }, []);

  return (
    <div {...props} ref={setHostRef}>
      {shadowRoot && createPortal(children, shadowRoot)}
    </div>
  );
};
