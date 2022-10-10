import { ModuleBoundMiddleware } from './module-bound.middleware';

describe('ModuleBoundMiddleware', () => {
  it('should be defined', () => {
    expect(new ModuleBoundMiddleware()).toBeDefined();
  });
});
