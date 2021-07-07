import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensacionRoutingModule } from './dispensacion-routing.module';
import { DispensacionComponent } from './dispensacion.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    DispensacionComponent
  ],
  imports: [
    CommonModule,
    DispensacionRoutingModule, HomeModule
  ]
})
export class DispensacionModule { }
