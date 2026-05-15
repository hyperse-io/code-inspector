import type { FC } from 'react';
import type { Metadata } from 'next';
import { HomePage } from '@/components/home';

export const metadata: Metadata = {
  title: 'Hyperse Code Inspector',
  description:
    '@hyperse/inspector connects your browser to your IDE—hotkey, click, open source at the right line and column.',
};

const IndexPage: FC = () => {
  return <HomePage />;
};

export default IndexPage;
