import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovedadesRoutingModule } from './novedades-routing.module';
import { NovedadesComponent } from './novedades.component';


@NgModule({
  declarations: [
    NovedadesComponent
  ],
  imports: [
    CommonModule,
    NovedadesRoutingModule
  ]
})
export class NovedadesModule { }