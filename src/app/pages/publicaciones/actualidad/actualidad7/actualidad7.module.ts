import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad7RoutingModule } from './actualidad7-routing.module';
import { Actualidad7Component } from './actualidad7.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad7Component
  ],
  imports: [
    CommonModule,
    Actualidad7RoutingModule,
    HomeModule
  ]
})
export class Actualidad7Module { }
