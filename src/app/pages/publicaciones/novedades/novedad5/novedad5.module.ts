import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Novedad5RoutingModule } from './novedad5-routing.module';
import { Novedad5Component } from './novedad5.component';
import { HomeModule } from 'src/app/pages/home/home.module';


@NgModule({
  declarations: [
    Novedad5Component
  ],
  imports: [
    CommonModule,
    Novedad5RoutingModule,
    HomeModule
  ]
})
export class Novedad5Module { }
