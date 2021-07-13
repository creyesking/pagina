import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad3RoutingModule } from './actualidad3-routing.module';
import { Actualidad3Component } from './actualidad3.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad3Component
  ],
  imports: [
    CommonModule,
    Actualidad3RoutingModule,
    HomeModule
  ]
})
export class Actualidad3Module { }
