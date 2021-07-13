import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad2RoutingModule } from './actualidad2-routing.module';
import { Actualidad2Component } from './actualidad2.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad2Component
  ],
  imports: [
    CommonModule,
    Actualidad2RoutingModule,
    HomeModule
  ]
})
export class Actualidad2Module { }
