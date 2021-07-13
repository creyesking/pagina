import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad6RoutingModule } from './actualidad6-routing.module';
import { Actualidad6Component } from './actualidad6.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad6Component
  ],
  imports: [
    CommonModule,
    Actualidad6RoutingModule,
    HomeModule
  ]
})
export class Actualidad6Module { }
