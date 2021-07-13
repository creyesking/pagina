import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad1RoutingModule } from './novedad1-routing.module';
import { Novedad1Component } from './novedad1.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Novedad1Component
  ],
  imports: [
    CommonModule,
    Novedad1RoutingModule,
    HomeModule
  ]
})
export class Novedad1Module { }
