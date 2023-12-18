import { TestBed } from '@angular/core/testing';

import { GenericConfigurationService } from './generic-configuration.service';

describe('GenericConfigurationService', () => {
  let service: GenericConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
