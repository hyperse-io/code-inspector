---
"@hyperse/inspector-babel-plugin": patch
"@hyperse/inspector-middleware": patch
"@hyperse/inspector-component": patch
"@hyperse/inspector-swc-plugin": patch
"@hyperse/inspector-common": patch
"@hyperse/next-inspector": patch
"@hyperse/inspector": patch
---

chore: upgrade the toolchain and dependencies for improved compatibility and performance; aligns the Babel 8 migration across the monorepo and fixes the failures it exposed

- `@hyperse/inspector-babel-plugin`: the plugin now declares its options and state via `declare<PluginState, PluginOptions>`, so `projectCwd` is typed from the plugin options instead of being read off the per-file state (which Babel can never satisfy). The `PluginOptions` type is exported, and the unused `fileNameIdentifier` field was dropped from `PluginState`.
- `@hyperse/inspector`: model React's `_debugSource` fiber field explicitly, as `@types/react-reconciler@0.34` removed it from the published `Fiber` interface even though React still sets it at runtime.
- `@hyperse/inspector-component`: formatting-only change to the overlay drop-shadow style.
