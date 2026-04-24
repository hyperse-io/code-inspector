import nextra from 'nextra';
import { z } from 'zod';
import { createNextConfig, createNextConfigEnv } from '@hyperse/next-config';
import { SITE_BASE_PATH } from './src/config/site';

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
  mdxOptions: {
    remarkPlugins: [],
  },
});

// We use a custom env to validate the build env
const buildEnv = createNextConfigEnv(
  z.object({
    NEXT_BUILD_ENV_OUTPUT: z
      .union([z.literal('standalone'), z.literal('export')])
      .optional(),
  })
);

export default createNextConfig(
  {
    basePath: SITE_BASE_PATH,
    turbopack: {
      resolveAlias: {
        // Next.js 16 + Turbopack: `@vercel/turbopack-next/mdx-import-source` may not resolve; point at the app MDX provider.
        'next-mdx-import-source-file': './mdx-components.tsx',
      },
    },
    output: buildEnv.NEXT_BUILD_ENV_OUTPUT,
    images: {
      unoptimized:
        buildEnv.NEXT_BUILD_ENV_OUTPUT === 'export' ? true : undefined,
    },
  },
  [withNextra]
);
