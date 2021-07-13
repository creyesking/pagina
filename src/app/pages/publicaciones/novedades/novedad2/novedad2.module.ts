import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad2RoutingModule } from './novedad2-routing.module';
import { Novedad2Component } from './novedad2.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad2Component
  ],
  imports: [
    CommonModule,
    Novedad2RoutingModule,
    HomeModule
  ]
})
export class Novedad2Module { }
