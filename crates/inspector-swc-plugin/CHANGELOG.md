# @hyperse/inspector-swc-plugin

## 3.0.0

### Major Changes

- [#46](https://github.com/hyperse-io/code-inspector/pull/46) [`a48208b`](https://github.com/hyperse-io/code-inspector/commit/a48208b2c0c871b22b561f3e912bc9bf6b07ed11) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - feat: publish v2.0.0
  chore: update dependencies across the project for improved compatibility and performance;

## 2.0.0

### Major Changes

- [#44](https://github.com/hyperse-io/code-inspector/pull/44) [`92fb1c2`](https://github.com/hyperse-io/code-inspector/commit/92fb1c249c9e0597babc416de640349d79affac8) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - feat: publish v2.0.0
  chore: update dependencies across the project for improved compatibility and performance;

## 1.1.10

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

## 1.1.9

### Patch Changes

- [#40](https://github.com/hyperse-io/code-inspector/pull/40) [`14f4eaf`](https://github.com/hyperse-io/code-inspector/commit/14f4eafac735ff180fab431f81b52e72cba2b814) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - feat: implement support for React fragments in inspector plugins

- [#40](https://github.com/hyperse-io/code-inspector/pull/40) [`68bf503`](https://github.com/hyperse-io/code-inspector/commit/68bf5037db8b6447ff68a6413e0ecb31bbea8d3f) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - chore: update dependencies across inspector packages

## 1.1.8

### Patch Changes

- [#38](https://github.com/hyperse-io/code-inspector/pull/38) [`a1347b4`](https://github.com/hyperse-io/code-inspector/commit/a1347b4862c47a2ee3aed53e72f83865424e8bf6) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - chore: update swc version

## 1.1.7

### Patch Changes

- [#17](https://github.com/hyperse-io/code-inspector/pull/17) [`251ca23`](https://github.com/hyperse-io/code-inspector/commit/251ca234a86be683da5c356aee53e6279866f1f7) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - support nextjs

## 1.1.6

### Patch Changes

- [#14](https://github.com/hyperse-io/code-inspector/pull/14) [`47f0dde`](https://github.com/hyperse-io/code-inspector/commit/47f0dde428b1d595f605021aa8a2dc0509e9e522) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - 1、update inspector plugin to use data-hps-source attribute for JSX elements.
  2、remove isAbsolutePath option.

## 1.1.5

### Patch Changes

- [#10](https://github.com/hyperse-io/code-inspector/pull/10) [`c2f24a5`](https://github.com/hyperse-io/code-inspector/commit/c2f24a59472dbbd3cf73b0068f621a845e6cb7be) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - The fileName returns the relative path by default

## 1.1.4

### Patch Changes

- [#8](https://github.com/hyperse-io/code-inspector/pull/8) [`414393e`](https://github.com/hyperse-io/code-inspector/commit/414393e41af27cd4d94a1a8cb7adc515fcb650e3) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - publish inspector-swc-plugin

## 1.1.3

### Patch Changes

- [#6](https://github.com/hyperse-io/code-inspector/pull/6) [`7cf7869`](https://github.com/hyperse-io/code-inspector/commit/7cf7869341e895c89ff0ebdec26c3af43d7786b7) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - publish inspector-swc-plugin

## 1.1.2

### Patch Changes

- [#3](https://github.com/hyperse-io/code-inspector/pull/3) [`5ac9301`](https://github.com/hyperse-io/code-inspector/commit/5ac9301ae8638580296bccc7772d42424e8107b2) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - 1、add code inspector
  2、add transform plugin for swc loader
  3、add transform plugin for babel loader
