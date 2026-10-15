/**
 * Must stay in sync with `basePath` in `next.config.ts`.
 * Used for URLs that bypass Next.js automatic basePath handling (raw asset paths in CSS, media elements, inline styles, etc.).
 */
export const SITE_BASE_PATH = '/code-inspector';

/** Site metadata, reused by the root layout and by MDX pages. */
export const SITE_NAME = 'Hyperse Code Inspector';

export const SITE_DESCRIPTION =
  '@hyperse/inspector connects your browser to your IDE—hotkey, click, open source at the right line and column.';

export const GIT_USER = 'hyperse-io';
export const GIT_REPO = 'code-inspector';
export const GIT_BRANCH = 'main';
export const GIT_URL = `https://github.com/${GIT_USER}/${GIT_REPO}`;
