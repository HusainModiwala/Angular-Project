import { TestBed } from '@angular/core/testing';

import { ResultManagementServiceService } from './result-management-service.service';

describe('ResultManagementServiceService', () => {
  let service: ResultManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
