import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  index: {
    type: 'page',
    display: 'hidden',
  },
  guide: {
    type: 'page',
    title: 'Guide',
  },
  configuration: {
    type: 'page',
    title: 'Configuration',
  },
  integrations: {
    type: 'page',
    title: 'Integrations',
  },
  resources: {
    type: 'menu',
    title: 'Resources',
    items: {
      about: {
        title: 'About',
        href: '/about',
      },
      blog: {
        title: 'Hyperse Blog',
        href: 'https://www.hyperse.net/blog',
      },
      repo: {
        title: 'GitHub',
        href: 'https://github.com/hyperse-io/code-inspector',
      },
    },
  },
  showcase: {
    type: 'page',
    theme: {
      typesetting: 'article',
      layout: 'full',
      timestamp: false,
      toc: false,
    },
  },
  about: {
    type: 'page',
    theme: {
      typesetting: 'article',
    },
  },
};

export default meta;
