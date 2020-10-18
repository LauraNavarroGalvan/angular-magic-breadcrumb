import { TestBed } from '@angular/core/testing';

import { AngularMagicBreadcrumbService } from './angular-magic-breadcrumb.service';

describe('AngularMagicBreadcrumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularMagicBreadcrumbService = TestBed.get(AngularMagicBreadcrumbService);
    expect(service).toBeTruthy();
  });
});
