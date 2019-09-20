import {ModuleWithProviders, NgModule} from '@angular/core';
import {CustomBreadcrumbComponent} from './custom-breadcrumb.component';
import {AngularMagicBreadcrumbService} from "./angular-magic-breadcrumb.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CustomBreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomBreadcrumbComponent],
})
export class AngularMagicBreadcrumbModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularMagicBreadcrumbModule,
      providers: [
        AngularMagicBreadcrumbService
      ]
    };
  }
}
