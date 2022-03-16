import { TestBed } from '@angular/core/testing';

import { MyModuleServiceService } from './my-module-service.service';

describe('MyModuleServiceService', () => {
  let service: MyModuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyModuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
