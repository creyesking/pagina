import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad10RoutingModule } from './novedad10-routing.module';
import { Novedad10Component } from './novedad10.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Novedad10Component
  ],
  imports: [
    CommonModule,
    Novedad10RoutingModule,
    HomeModule
  ]
})
export class Novedad10Module { }
