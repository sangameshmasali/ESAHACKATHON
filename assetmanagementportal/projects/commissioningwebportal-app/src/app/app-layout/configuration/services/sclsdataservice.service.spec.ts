import { TestBed } from '@angular/core/testing';

import { SclsdataserviceService } from './sclsdataservice.service';

describe('SclsdataserviceService', () => {
  let service: SclsdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SclsdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
