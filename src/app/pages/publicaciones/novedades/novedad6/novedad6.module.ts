import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad6RoutingModule } from './novedad6-routing.module';
import { Novedad6Component } from './novedad6.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad6Component
  ],
  imports: [
    CommonModule,
    Novedad6RoutingModule,
    HomeModule
  ]
})
export class Novedad6Module { }
