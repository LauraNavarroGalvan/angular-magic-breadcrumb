import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularMagicBreadcrumbModule} from "angular-magic-breadcrumb";
import {RouterModule, Routes} from "@angular/router";
import { AppDetailsComponent } from './app-details/app-details.component';
import {AppChildsComponent} from "./app-childs.component";
import {AppSummaryComponent} from "./app-details/childs/app-summary.component";
const appRoutes: Routes = [
  {path: 'plataforma', component: AppChildsComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: AppDetailsComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          { path: 'summary', component: AppSummaryComponent },
          { path: '**', redirectTo: 'summary' }
        ]},
      { path: '**', redirectTo: 'details' }
    ]}

];

@NgModule({
  declarations: [
    AppComponent,
    AppDetailsComponent,
    AppChildsComponent,
    AppSummaryComponent
  ],
  imports: [
    BrowserModule,
    AngularMagicBreadcrumbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
