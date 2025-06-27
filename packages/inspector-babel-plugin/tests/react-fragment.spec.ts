import { join, relative } from 'path/posix';
import { TRACE_SOURCE } from '@hyperse/inspector-common';
import inspectorBabelPlugin from '../src/index.js';
import { babelCompile, getDirname } from './utils/index.js';

describe(`tests preset babel react fragment, inject inspector source`, () => {
  const projectCwd = getDirname(import.meta.url, 'fixtures');
  it('should correct support react fragment', async () => {
    const filePath = join(projectCwd, './react-fragment.tsx');

    const compiledCode = babelCompile(filePath, {
      plugins: [
        [
          inspectorBabelPlugin,
          {
            projectCwd: projectCwd,
          },
        ],
      ],
    })?.code;

    // check React.Fragment is contain data-hps-source attribute
    // note: the actual compiled format is _react.default.Fragment,{"data-hps-source" (no space)
    const fragmentDefaultWithSource = `_react.default.Fragment,{"${TRACE_SOURCE}"`;
    expect(compiledCode?.replace(/[\s\n]+/g, '')).not.toContain(
      fragmentDefaultWithSource
    );

    const fragmentWithSource = `_react.Fragment,{"${TRACE_SOURCE}"`;
    expect(compiledCode?.replace(/[\s\n]+/g, '')).not.toContain(
      fragmentWithSource
    );

    // more accurate check, ensure is React.Fragment attribute
    const fragmentDefaultPattern = new RegExp(
      `_react\\.default\\.Fragment,\\s*{[^}]*"${TRACE_SOURCE}"[^}]*}`,
      's'
    );
    expect(compiledCode).toMatch(fragmentDefaultPattern);

    const fragmentPattern = new RegExp(
      `_react\\.Fragment,\\s*{[^}]*"${TRACE_SOURCE}"[^}]*}`,
      's'
    );
    expect(compiledCode).toMatch(fragmentPattern);

    // check div element location information
    expect(compiledCode?.replace(/[\s\n]+/g, '')).toContain(
      `${relative(projectCwd, filePath)}:7:9:div`
    );
    expect(compiledCode?.replace(/[\s\n]+/g, '')).toContain(
      `${relative(projectCwd, filePath)}:10:9:div`
    );
  });
});
