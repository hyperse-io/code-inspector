# @hyperse/inspector-common

## 2.0.4

### Patch Changes

- [`e1ad56c`](https://github.com/hyperse-io/code-inspector/commit/e1ad56c8749345ed464e67965fb1d6bef25a5489) Thanks [@tianyingchun](https://github.com/tianyingchun)! - chore: upgrade the toolchain and dependencies for improved compatibility and performance; aligns the Babel 8 migration across the monorepo and fixes the failures it exposed

  - `@hyperse/inspector-babel-plugin`: the plugin now declares its options and state via `declare<PluginState, PluginOptions>`, so `projectCwd` is typed from the plugin options instead of being read off the per-file state (which Babel can never satisfy). The `PluginOptions` type is exported, and the unused `fileNameIdentifier` field was dropped from `PluginState`.
  - `@hyperse/inspector`: model React's `_debugSource` fiber field explicitly, as `@types/react-reconciler@0.34` removed it from the published `Fiber` interface even though React still sets it at runtime.
  - `@hyperse/inspector-component`: formatting-only change to the overlay drop-shadow style.

## 2.0.3

### Patch Changes

- [#55](https://github.com/hyperse-io/code-inspector/pull/55) [`0732aae`](https://github.com/hyperse-io/code-inspector/commit/0732aaec4f6f91cc12fd4d9f91d7b4356ad0c282) Thanks [@ShunquanWang](https://github.com/ShunquanWang)! - refactor: rename TrustedEditor enum to TrustedEditorEnum and update references throughout the codebase for consistency

## 2.0.2

### Patch Changes

- [#53](https://github.com/hyperse-io/code-inspector/pull/53) [`6b7688e`](https://github.com/hyperse-io/code-inspector/commit/6b7688e4925c993b5f92e991e3eeef357ec4464a) Thanks [@ShunquanWang](https://github.com/ShunquanWang)! - chore: update package versions and configurations for improved compatibility and performance; includes dependency upgrades and adjustments to TypeScript configurations

## 2.0.1

### Patch Changes

- [#51](https://github.com/hyperse-io/code-inspector/pull/51) [`e0bc78d`](https://github.com/hyperse-io/code-inspector/commit/e0bc78d6118e4696e801dd852aed3b9336bf1958) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - chore: update dependencies across the project for improved compatibility and performance;

## 2.0.0

### Major Changes

- [#49](https://github.com/hyperse-io/code-inspector/pull/49) [`77dfa1b`](https://github.com/hyperse-io/code-inspector/commit/77dfa1ba3425d030236d0f28124a317d56dc3bc7) Thanks [@tclxshunquan-wang](https://github.com/tclxshunquan-wang)! - feat: publish v2.0.0
  chore: update dependencies across the project for improved compatibility and performance;

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
