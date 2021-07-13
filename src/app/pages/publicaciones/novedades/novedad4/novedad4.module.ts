import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad4RoutingModule } from './novedad4-routing.module';
import { Novedad4Component } from './novedad4.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad4Component
  ],
  imports: [
    CommonModule,
    Novedad4RoutingModule,
    HomeModule
  ]
})
export class Novedad4Module { }
