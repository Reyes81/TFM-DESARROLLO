import { TestBed } from '@angular/core/testing';

import { ChangeTranslateService } from './change-translate.service';

describe('TranslateService', () => {
  let service: ChangeTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
