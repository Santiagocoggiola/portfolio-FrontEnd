import { TestBed } from '@angular/core/testing';

import { SetDatabaseService } from './set-database.service';

describe('SetDatabaseService', () => {
  let service: SetDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
