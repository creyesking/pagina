import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Regulatorio3RoutingModule } from './regulatorio3-routing.module';
import { Regulatorio3Component } from './regulatorio3.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Regulatorio3Component
  ],
  imports: [
    CommonModule,
    Regulatorio3RoutingModule,
    HomeModule
  ]
})
export class Regulatorio3Module { }
