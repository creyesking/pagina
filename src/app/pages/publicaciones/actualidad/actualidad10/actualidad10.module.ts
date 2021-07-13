import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad10RoutingModule } from './actualidad10-routing.module';
import { Actualidad10Component } from './actualidad10.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad10Component
  ],
  imports: [
    CommonModule,
    Actualidad10RoutingModule,
    HomeModule
  ]
})
export class Actualidad10Module { }
