import { TestBed } from '@angular/core/testing';

import { UserDataService } from './profile-data.service';
import { UserData } from './userData';

describe('UserData', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserData = TestBed.get(UserData);
    expect(service).toBeTruthy();
  });
});
