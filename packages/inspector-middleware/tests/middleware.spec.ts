import type { NextFunction } from 'express';
import launchEditor from 'launch-editor';
import { join } from 'node:path';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  launchEditorEndpoint,
  TrustedEditorEnum,
} from '@hyperse/inspector-common';
import { createLaunchEditorMiddleware } from '../src/create-launch-editor-middleware.js';

// Mock launch-editor module
vi.mock('launch-editor');

describe('createLaunchEditorMiddleware', () => {
  let mockReq: any;
  let mockRes: any;
  let mockNext: NextFunction;
  let middleware: any;

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();

    // Setup mock request
    mockReq = {
      url: '',
    };

    // Setup mock response
    mockRes = {
      statusCode: 200,
      end: vi.fn(),
    };

    // Setup mock next function
    mockNext = vi.fn();

    // Create middleware instance
    middleware = createLaunchEditorMiddleware({});
  });

  it('should call next() if URL does not match launch editor endpoint', () => {
    mockReq.url = '/some-other-endpoint';

    middleware(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.end).not.toHaveBeenCalled();
  });

  it('should return 400 if fileName is missing', () => {
    mockReq.url = join('/', launchEditorEndpoint);

    middleware(mockReq, mockRes, mockNext);

    expect(mockRes.statusCode).toBe(400);
    expect(mockRes.end).toHaveBeenCalledWith(
      '[hps-launch-editor]: required query param "fileName" is missing.'
    );
  });

  it('should launch editor with correct file path', () => {
    mockReq.url = join('/', launchEditorEndpoint, '?fileName=test.js');

    middleware(mockReq, mockRes, mockNext);

    expect(launchEditor).toHaveBeenCalled();
    expect(mockRes.end).toHaveBeenCalled();
  });

  it('should include line number in file path if provided', () => {
    mockReq.url = join(
      '/',
      launchEditorEndpoint,
      '?fileName=test.js&lineNumber=10'
    );

    middleware(mockReq, mockRes, mockNext);

    expect(launchEditor).toHaveBeenCalledWith(
      expect.stringContaining(':10'),
      undefined
    );
  });

  it('should include column number in file path if provided', () => {
    mockReq.url = join(
      '/',
      launchEditorEndpoint,
      '?fileName=test.js&lineNumber=10&colNumber=5'
    );

    middleware(mockReq, mockRes, mockNext);

    expect(launchEditor).toHaveBeenCalledWith(
      expect.stringContaining(':10:5'),
      undefined
    );
  });

  it('should return 400 if untrusted editor is specified', () => {
    mockReq.url = join(
      '/',
      launchEditorEndpoint,
      '?fileName=test.js&editor=untrusted'
    );

    middleware(mockReq, mockRes, mockNext);

    expect(mockRes.statusCode).toBe(400);
    expect(mockRes.end).toHaveBeenCalledWith(
      '[hps-launch-editor]: the specified editor (untrusted) is not trusted on server! To open this editor, please use URL-scheme to call it from browser.'
    );
  });

  it('should use custom base path if provided', () => {
    const customMiddleware = createLaunchEditorMiddleware({
      customLaunchEditorEndpoint: '/custom',
    });

    mockReq.url = '/custom?fileName=test.js';

    customMiddleware(mockReq, mockRes, mockNext);

    expect(launchEditor).toHaveBeenCalled();
    expect(mockRes.end).toHaveBeenCalled();
  });

  it('should use specified editor from options', () => {
    const customMiddleware = createLaunchEditorMiddleware({
      trustedEditor: TrustedEditorEnum.VSCode,
    });

    mockReq.url = join('/', launchEditorEndpoint, '?fileName=test.js');

    customMiddleware(mockReq, mockRes, mockNext);

    expect(launchEditor).toHaveBeenCalledWith(
      expect.any(String),
      TrustedEditorEnum.VSCode
    );
  });
});
