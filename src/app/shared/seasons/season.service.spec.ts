import { TestBed, inject } from '@angular/core/testing';

import { SeasonService } from './season.service';

describe('SeasonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonService]
    });
  });

  it('should be created', inject([SeasonService], (service: SeasonService) => {
    expect(service).toBeTruthy();
  }));
});
