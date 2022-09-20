import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncreasingComponent } from './increasing/increasing.component';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncreasingComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncreasingComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
