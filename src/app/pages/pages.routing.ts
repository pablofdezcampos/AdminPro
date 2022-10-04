import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
const routes: Routes = [
  {
    //To make nested routed, you have to fix in path the parent route
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
      {path: 'progress', component: ProgressComponent, data: {title: 'Progress'} },
      {path: 'graphic1', component: Graphic1Component, data: {title: 'Graphic1'} },
      {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'} },
      {path: 'promises', component: PromiseComponent, data: {title: 'Promises'} },
      {path: 'rxjs', component: RxjsComponent, data: {title: 'Rxjs'} },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule{}
