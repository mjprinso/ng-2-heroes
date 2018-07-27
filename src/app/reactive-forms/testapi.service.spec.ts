import { TestBed, inject } from '@angular/core/testing';

import { TestapiService } from './testapi.service';

describe('TestapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestapiService]
    });
  });

  it('should be created', inject([TestapiService], (service: TestapiService) => {
    expect(service).toBeTruthy();
  }));
});
