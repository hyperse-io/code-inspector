import type { FC, ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

const DocsRootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Banner id="inspector-docs" variant="rainbow">
        📌 Documentation for{' '}
        <a
          href="https://www.npmjs.com/package/@hyperse/inspector"
          className="underline"
        >
          @hyperse/inspector
        </a>{' '}
        and related packages.
      </Banner>
      <DocsLayout
        tree={source.getPageTree()}
        {...baseOptions}
        sidebar={{ defaultOpenLevel: 1 }}
      >
        {children}
      </DocsLayout>
    </>
  );
};

export default DocsRootLayout;
