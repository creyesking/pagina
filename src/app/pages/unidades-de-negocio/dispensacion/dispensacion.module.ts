import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensacionRoutingModule } from './dispensacion-routing.module';
import { DispensacionComponent } from './dispensacion.component';


@NgModule({
  declarations: [
    DispensacionComponent
  ],
  imports: [
    CommonModule,
    DispensacionRoutingModule
  ]
})
export class DispensacionModule { }
