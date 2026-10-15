import type { FC, ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

/**
 * The `/about` page is authored as `content/docs/about.mdx` and reuses the
 * Fumadocs page primitives. `DocsPage` requires a `DocsLayout` ancestor, so this
 * route group provides one without moving the page under the `/docs` URL space.
 */
const AboutLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions}
      sidebar={{ defaultOpenLevel: 1 }}
    >
      {children}
    </DocsLayout>
  );
};

export default AboutLayout;
