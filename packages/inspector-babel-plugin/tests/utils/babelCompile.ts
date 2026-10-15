import { readFileSync } from 'fs';
import type { FileResult, InputOptions } from '@babel/core';
import { transformSync } from '@babel/core';
import { reactBabelPreset } from './reactBabelPreset.js';

export function babelCompile(
  filePath: string,
  extraOptions: InputOptions = {}
): FileResult | null {
  const testCode = readFileSync(filePath).toString();
  const babelOption = Object.assign(
    {},
    reactBabelPreset('development')
  ) as InputOptions;
  return transformSync(testCode, {
    filename: filePath,
    ...babelOption,
    ...extraOptions,
  });
}
