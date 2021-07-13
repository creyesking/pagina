import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad8RoutingModule } from './novedad8-routing.module';
import { Novedad8Component } from './novedad8.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad8Component
  ],
  imports: [
    CommonModule,
    Novedad8RoutingModule,
    HomeModule
  ]
})
export class Novedad8Module { }
