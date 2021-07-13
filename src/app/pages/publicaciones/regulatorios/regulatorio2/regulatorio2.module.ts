import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Regulatorio2RoutingModule } from './regulatorio2-routing.module';
import { Regulatorio2Component } from './regulatorio2.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Regulatorio2Component
  ],
  imports: [
    CommonModule,
    Regulatorio2RoutingModule,
    HomeModule
  ]
})
export class Regulatorio2Module { }
