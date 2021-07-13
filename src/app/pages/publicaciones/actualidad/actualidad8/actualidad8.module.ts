import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad8RoutingModule } from './actualidad8-routing.module';
import { Actualidad8Component } from './actualidad8.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad8Component
  ],
  imports: [
    CommonModule,
    Actualidad8RoutingModule,
    HomeModule
  ]
})
export class Actualidad8Module { }
