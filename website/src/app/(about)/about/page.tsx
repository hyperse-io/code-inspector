import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { source } from '@/lib/source';
import { getMDXComponents } from '../../../../mdx-components';

/**
 * The `/about` route is authored as `content/docs/about.mdx`, so it reuses the
 * Fumadocs page primitives (typography, TOC, anchor links) while living outside
 * the `/docs` URL space. The sibling `(about)/layout.tsx` supplies the
 * `DocsLayout` that `DocsPage` requires.
 */
export default async function AboutPage() {
  const page = source.getPage(['about']);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = source.getPage(['about']);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
