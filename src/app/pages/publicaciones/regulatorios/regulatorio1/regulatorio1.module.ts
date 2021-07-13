import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Regulatorio1RoutingModule } from './regulatorio1-routing.module';
import { Regulatorio1Component } from './regulatorio1.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Regulatorio1Component
  ],
  imports: [
    CommonModule,
    Regulatorio1RoutingModule,
    HomeModule
  ]
})
export class Regulatorio1Module { }
