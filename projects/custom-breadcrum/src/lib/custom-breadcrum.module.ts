import {ModuleWithProviders, NgModule} from '@angular/core';
import {CustomBreadcrumComponent} from './custom-breadcrum.component';
import {CustomBreadcrumService} from "./custom-breadcrum.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CustomBreadcrumComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomBreadcrumComponent],
})
export class CustomBreadcrumModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomBreadcrumModule,
      providers: [
        CustomBreadcrumService
      ]
    };
  }
}
