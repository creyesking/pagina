import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad3RoutingModule } from './novedad3-routing.module';
import { Novedad3Component } from './novedad3.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad3Component
  ],
  imports: [
    CommonModule,
    Novedad3RoutingModule,
    HomeModule
  ]
})
export class Novedad3Module { }
