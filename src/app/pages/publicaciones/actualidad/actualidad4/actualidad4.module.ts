import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Actualidad4RoutingModule } from './actualidad4-routing.module';
import { Actualidad4Component } from './actualidad4.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Actualidad4Component
  ],
  imports: [
    CommonModule,
    Actualidad4RoutingModule,
    HomeModule
  ]
})
export class Actualidad4Module { }
