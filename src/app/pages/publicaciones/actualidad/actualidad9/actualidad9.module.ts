import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad9RoutingModule } from './actualidad9-routing.module';
import { Actualidad9Component } from './actualidad9.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad9Component
  ],
  imports: [
    CommonModule,
    Actualidad9RoutingModule,
    HomeModule
  ]
})
export class Actualidad9Module { }
