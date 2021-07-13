import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad9RoutingModule } from './novedad9-routing.module';
import { Novedad9Component } from './novedad9.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad9Component
  ],
  imports: [
    CommonModule,
    Novedad9RoutingModule,
    HomeModule
  ]
})
export class Novedad9Module { }
