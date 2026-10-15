import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { SITE_BASE_PATH, SITE_DESCRIPTION, SITE_NAME } from '@/config/site';
import '@/app/globals.css';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://hyperse-io.github.io'),
  keywords: [
    'Hyperse',
    'Inspector',
    'React',
    'IDE',
    'Developer experience',
    'Next.js',
    'Vite',
    'Webpack',
    'Rspack',
  ],
  generator: 'Hyperse',
  applicationName: SITE_NAME,
  appleWebApp: {
    title: 'Code Inspector',
  },
  title: {
    default: SITE_NAME,
    template: '%s | Code Inspector',
  },
  openGraph: {
    url: './',
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    site: 'https://www.hyperse.net/',
  },
  alternates: {
    canonical: './',
  },
};

const RootLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${SITE_BASE_PATH}/favicon.ico`} sizes="any" />
        <link
          rel="icon"
          href={`${SITE_BASE_PATH}/logo.svg`}
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href={`${SITE_BASE_PATH}/apple-touch-icon.png`}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/*
          Fumadocs' static search client builds its URL as
          `join(BASE_PATH, api)`, and `BASE_PATH` comes from Vite's
          `import.meta.env.BASE_URL` — which does not exist in Next.js, so it is
          always `'/'`. Next.js' `basePath` is therefore NOT applied
          automatically, and omitting it makes the client request
          `/api/search` (404) instead of `${basePath}/api/search`.
        */}
        <RootProvider
          search={{
            options: {
              type: 'static',
              api: `${SITE_BASE_PATH}/api/search`,
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
