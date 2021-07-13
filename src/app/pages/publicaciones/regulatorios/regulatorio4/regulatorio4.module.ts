import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Regulatorio4RoutingModule } from './regulatorio4-routing.module';
import { Regulatorio4Component } from './regulatorio4.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Regulatorio4Component
  ],
  imports: [
    CommonModule,
    Regulatorio4RoutingModule,
    HomeModule
  ]
})
export class Regulatorio4Module { }
