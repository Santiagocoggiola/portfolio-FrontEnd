import { TestBed } from '@angular/core/testing';

import { GetDatabaseService } from './get-database.service';

describe('GetDatabaseService', () => {
  let service: GetDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
