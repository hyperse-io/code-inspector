import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/Icons';
import { GIT_REPO, GIT_URL } from '@/config/site';

export const gitConfig = {
  user: 'hyperse-io',
  repo: GIT_REPO,
  branch: 'main',
};

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="flex items-center gap-2">
        <Logo height="20" />
        <span className="font-extralight">Code Inspector</span>
      </span>
    ),
  },
  githubUrl: GIT_URL,
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'About',
      url: '/about',
    },
  ],
};
