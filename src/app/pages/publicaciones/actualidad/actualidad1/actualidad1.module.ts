import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad1RoutingModule } from './actualidad1-routing.module';
import { Actualidad1Component } from './actualidad1.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad1Component
  ],
  imports: [
    CommonModule,
    Actualidad1RoutingModule,
    HomeModule
  ]
})
export class Actualidad1Module { }
