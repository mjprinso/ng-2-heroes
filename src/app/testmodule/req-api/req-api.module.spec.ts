import { ReqApiModule } from './req-api.module';

describe('ReqApiModule', () => {
  let reqApiModule: ReqApiModule;

  beforeEach(() => {
    reqApiModule = new ReqApiModule();
  });

  it('should create an instance', () => {
    expect(reqApiModule).toBeTruthy();
  });
});
