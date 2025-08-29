---
"@hyperse/inspector-babel-plugin": patch
"@hyperse/inspector-middleware": patch
"@hyperse/inspector-component": patch
"@hyperse/inspector-swc-plugin": patch
"@hyperse/inspector-common": patch
"@hyperse/next-inspector": patch
"@hyperse/inspector": patch
---

### Fixed

- `@hyperse/inspector-swc-plugin`: Improve transform stability and fix location shifts caused by JSX prop order; align behavior with the Babel plugin.

### Changed

- `@hyperse/next-inspector`: Refine API route creation and configuration pass-through; tweak `vitest` settings for more stable tests.
- `@hyperse/inspector-babel-plugin`: Align shared constants and type references; minor performance and bundle size improvements.
- `@hyperse/inspector-middleware`: Strengthen request parsing and error handling; better edge-case coverage.
- `@hyperse/inspector-component`: Improve component prop types and interaction details for better usability.
- `@hyperse/inspector-common`: Add missing types and constant exports; unify internal dependency versions.
- `@hyperse/inspector`: Sync dependencies and internal exports; fine-tune client initialization.

### Documentation

- Update package READMEs to reflect latest usage and configuration guidance.
