import { TestBed } from '@angular/core/testing';

import { ServiceMenuService } from './service-menu.service';

describe('ServiceMenuService', () => {
  let service: ServiceMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
