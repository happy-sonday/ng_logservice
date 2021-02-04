import { TestBed } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';

describe('MySpecialLoggerService', () => {
  let service: MySpecialLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySpecialLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
