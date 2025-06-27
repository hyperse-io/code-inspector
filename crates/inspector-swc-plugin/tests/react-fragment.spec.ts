import { readFileSync } from 'fs';
import { join, relative } from 'path/posix';
import { TRACE_SOURCE } from '@hyperse/inspector-common';
import { getDirname } from './utils/getDirname.js';
import { transformCode } from './utils/transformCode.js';

describe(`tests preset swc react fragment, inject inspector source`, () => {
  const projectCwd = getDirname(import.meta.url, 'fixtures');
  it('should correct support react fragment', async () => {
    const filePath = join(projectCwd, './react-fragment.tsx');
    const input = readFileSync(
      new URL('./fixtures/react-fragment.tsx', import.meta.url),
      'utf-8'
    );
    const { code: compiledCode } = await transformCode(input, filePath, {
      projectCwd: process.cwd(),
    });
    // check React.Fragment is contain data-hps-source attribute
    // note: /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(\"div\",
    const fragmentDefaultWithSource = `React.Fragment,{"${TRACE_SOURCE}"`;
    expect(compiledCode?.replace(/[\s\n]+/g, '')).not.toContain(
      fragmentDefaultWithSource
    );

    // Fragment
    expect(compiledCode).toContain(
      `React.createElement(Fragment, null, /*#__PURE__*/ React.createElement("div",`
    );

    // React.Fragment
    expect(compiledCode).toContain(
      `React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div",`
    );

    // check div element location information
    expect(compiledCode?.replace(/[\s\n]+/g, '')).toContain(
      `${relative(projectCwd, filePath)}:7:9:div`
    );
    expect(compiledCode?.replace(/[\s\n]+/g, '')).toContain(
      `${relative(projectCwd, filePath)}:10:9:div`
    );
  });
});
