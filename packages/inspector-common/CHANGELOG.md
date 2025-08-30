# @hyperse/inspector-common

## 1.1.5

### Patch Changes

- [#42](https://github.com/hyperse-io/code-inspector/pull/42) [`1bf7053`](https://github.com/hyperse-io/code-inspector/commit/1bf7053c8a6ef853a87ec27fd83d39bbb87ba890) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - ### Fixed
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

## 1.1.4

### Patch Changes

- [#40](https://github.com/hyperse-io/code-inspector/pull/40) [`68bf503`](https://github.com/hyperse-io/code-inspector/commit/68bf5037db8b6447ff68a6413e0ecb31bbea8d3f) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - chore: update dependencies across inspector packages

## 1.1.3

### Patch Changes

- [#14](https://github.com/hyperse-io/code-inspector/pull/14) [`47f0dde`](https://github.com/hyperse-io/code-inspector/commit/47f0dde428b1d595f605021aa8a2dc0509e9e522) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - 1、update inspector plugin to use data-hps-source attribute for JSX elements.
  2、remove isAbsolutePath option.

## 1.1.2

### Patch Changes

- [#3](https://github.com/hyperse-io/code-inspector/pull/3) [`5ac9301`](https://github.com/hyperse-io/code-inspector/commit/5ac9301ae8638580296bccc7772d42424e8107b2) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - 1、add code inspector
  2、add transform plugin for swc loader
  3、add transform plugin for babel loader
