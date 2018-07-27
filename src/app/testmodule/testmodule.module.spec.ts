import { TestmoduleModule } from './testmodule.module';

describe('TestmoduleModule', () => {
  let testmoduleModule: TestmoduleModule;

  beforeEach(() => {
    testmoduleModule = new TestmoduleModule();
  });

  it('should create an instance', () => {
    expect(testmoduleModule).toBeTruthy();
  });
});
