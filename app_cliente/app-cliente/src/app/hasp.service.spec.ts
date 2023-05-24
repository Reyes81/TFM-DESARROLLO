import { TestBed } from '@angular/core/testing';

import { HaspService } from './hasp.service';

describe('HaspService', () => {
  let service: HaspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
