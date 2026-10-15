import type { FC } from 'react';
import type { Metadata } from 'next';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { HomePage } from '@/components/home';
import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

const IndexPage: FC = () => {
  return (
    <HomeLayout {...baseOptions}>
      <HomePage />
    </HomeLayout>
  );
};

export default IndexPage;
