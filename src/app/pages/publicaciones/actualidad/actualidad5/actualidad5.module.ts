import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad5RoutingModule } from './actualidad5-routing.module';
import { Actualidad5Component } from './actualidad5.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad5Component
  ],
  imports: [
    CommonModule,
    Actualidad5RoutingModule,
    HomeModule
  ]
})
export class Actualidad5Module { }
