import { CustomBreadcrumbComponent } from './custom-breadcrumb.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomBreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomBreadcrumbComponent]
})
export class AngularMagicBreadcrumbModule {
  constructor() { }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularMagicBreadcrumbModule,
      providers: []
    };
  }
}
