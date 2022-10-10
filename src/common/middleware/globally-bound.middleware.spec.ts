import { GloballyBoundMiddleware } from './globally-bound.middleware';

describe('GloballyboundMiddleware', () => {
  it('should be defined', () => {
    expect(new GloballyBoundMiddleware()).toBeDefined();
  });
});
