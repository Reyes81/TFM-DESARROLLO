import { TestBed } from '@angular/core/testing';

import { InfoLsymService } from './info-lsym.service';

describe('InfoLsymService', () => {
  let service: InfoLsymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoLsymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
