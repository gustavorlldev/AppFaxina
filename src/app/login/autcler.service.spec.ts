import { TestBed } from '@angular/core/testing';

import { AutclerService } from './autcler.service';

describe('AutclerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutclerService = TestBed.get(AutclerService);
    expect(service).toBeTruthy();
  });
});
