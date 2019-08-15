import { TestBed } from '@angular/core/testing';

import { CustomBreadcrumService } from './custom-breadcrum.service';

describe('CustomBreadcrumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomBreadcrumService = TestBed.get(CustomBreadcrumService);
    expect(service).toBeTruthy();
  });
});
