import { SwapiApiModule } from './swapi-api.module';

describe('SwapiApiModule', () => {
  let swapiApiModule: SwapiApiModule;

  beforeEach(() => {
    swapiApiModule = new SwapiApiModule();
  });

  it('should create an instance', () => {
    expect(swapiApiModule).toBeTruthy();
  });
});
