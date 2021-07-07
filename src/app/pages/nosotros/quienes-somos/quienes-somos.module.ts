import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { QuienesSomosComponent } from './quienes-somos.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    QuienesSomosComponent
  ],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule,
    HomeModule
  ]
})
export class QuienesSomosModule { }
