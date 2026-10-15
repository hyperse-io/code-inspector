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
    //
    // Babel 8 compiles JSX with the automatic runtime, so the callee is the
    // `jsxDEV` helper and the element type is the first argument:
    //   _jsxDEV(React.Fragment, { ... }, ...)
    // Fragment elements must stay free of the trace attribute, so their props
    // object must hold no trace key at all. Whitespace is stripped first so
    // these checks do not depend on formatting.
    const compactCode = compiledCode?.replace(/[\s\n]+/g, '') ?? '';
    expect(compactCode).toContain('_jsxDEV(React.Fragment,{children:');
    expect(compactCode).toContain('_jsxDEV(Fragment,{children:');

    // check div element location information
    expect(compiledCode?.replace(/[\s\n]+/g, '')).toContain(
      `${relative(projectCwd, filePath)}:7:9:div`
    );
    expect(compiledCode?.replace(/[\s\n]+/g, '')).toContain(
      `${relative(projectCwd, filePath)}:10:9:div`
    );
  });
});
