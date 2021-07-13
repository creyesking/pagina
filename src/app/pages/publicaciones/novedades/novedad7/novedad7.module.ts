import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad7RoutingModule } from './novedad7-routing.module';
import { Novedad7Component } from './novedad7.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad7Component
  ],
  imports: [
    CommonModule,
    Novedad7RoutingModule,
    HomeModule
  ]
})
export class Novedad7Module { }
