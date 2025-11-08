# @hyperse/inspector-component

## 1.1.9

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

- Updated dependencies [[`1bf7053`](https://github.com/hyperse-io/code-inspector/commit/1bf7053c8a6ef853a87ec27fd83d39bbb87ba890)]:
  - @hyperse/inspector-common@1.1.5

## 1.1.8

### Patch Changes

- [#40](https://github.com/hyperse-io/code-inspector/pull/40) [`68bf503`](https://github.com/hyperse-io/code-inspector/commit/68bf5037db8b6447ff68a6413e0ecb31bbea8d3f) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - chore: update dependencies across inspector packages

- Updated dependencies [[`68bf503`](https://github.com/hyperse-io/code-inspector/commit/68bf5037db8b6447ff68a6413e0ecb31bbea8d3f)]:
  - @hyperse/inspector-common@1.1.4

## 1.1.7

### Patch Changes

- [#36](https://github.com/hyperse-io/code-inspector/pull/36) [`28788a3`](https://github.com/hyperse-io/code-inspector/commit/28788a3403355e7d726e4aa451cf40c0c11c97ff) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - refactor: remove unmount logic from Overlay and InspectContextPanel components to streamline removal process

## 1.1.6

### Patch Changes

- [#34](https://github.com/hyperse-io/code-inspector/pull/34) [`b87143e`](https://github.com/hyperse-io/code-inspector/commit/b87143e6435a63fa7f9a294cbfdb9f503d069bc4) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - Fix: Resolved style override issues within Shadow DOM environments.
  Fix: Addressed compatibility issues when setting the translate property on documentElement.

## 1.1.5

### Patch Changes

- [#32](https://github.com/hyperse-io/code-inspector/pull/32) [`bd06de1`](https://github.com/hyperse-io/code-inspector/commit/bd06de1871003623e887d5493c2805972a0e30ea) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - refactor: update Overlay and Panel components to simplify props and improve styling logic

## 1.1.4

### Patch Changes

- [#30](https://github.com/hyperse-io/code-inspector/pull/30) [`08cea71`](https://github.com/hyperse-io/code-inspector/commit/08cea7138e45708ba2c41499542749003b336fa7) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - feat: add ShadowRoot component and integrate it into Overlay and InspectContextPanel

## 1.1.3

### Patch Changes

- [#28](https://github.com/hyperse-io/code-inspector/pull/28) [`677f427`](https://github.com/hyperse-io/code-inspector/commit/677f427e99cd7eff979e6384289e43b4a989a916) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - 1、fix: fix basePath when using next.config.mjs

## 1.1.2

### Patch Changes

- [#26](https://github.com/hyperse-io/code-inspector/pull/26) [`96bb683`](https://github.com/hyperse-io/code-inspector/commit/96bb683c0566fcda4ccfa6a6efe0e1bb6dd040b1) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - 1. perf: improve the performance of the inspector 2. chore: update example-nextjs 3. chore: remove unnecessary dependencies

- [#23](https://github.com/hyperse-io/code-inspector/pull/23) [`928c0a6`](https://github.com/hyperse-io/code-inspector/commit/928c0a6a997729c3fd1de0a8411fc4244eff5ccc) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - ### Features
  - Added new component library for better UI integration
  - Added Next.js support for seamless integration with Next.js applications
  - Added React 19 compatibility

  ### Improvements
  - Optimized code structure for better maintainability and performance
