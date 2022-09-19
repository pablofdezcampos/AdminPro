import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    RouterModule
  ],
  exports : [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ]
})
export class PagesModule { }
