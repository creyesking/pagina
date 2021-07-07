import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualidadRoutingModule } from './actualidad-routing.module';
import { ActualidadComponent } from './actualidad.component';


@NgModule({
  declarations: [
    ActualidadComponent
  ],
  imports: [
    CommonModule,
    ActualidadRoutingModule
  ]
})
export class ActualidadModule { }
