declare module '*.svg?svgr' {
  import type { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGElement>>;

  export default ReactComponent;
}

declare module '*.mdx' {
  import type { FC } from 'react';
  const ReactComponent: FC<{
    components?: Record<string, unknown>;
  }>;
  export default ReactComponent;
}
