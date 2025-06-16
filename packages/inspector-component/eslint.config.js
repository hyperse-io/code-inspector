import { base, defineConfig, react } from '@hyperse/eslint-config-hyperse';

export default defineConfig([
  ...base,
  react,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
