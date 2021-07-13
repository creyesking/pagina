import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Regulatorio6RoutingModule } from './regulatorio6-routing.module';
import { Regulatorio6Component } from './regulatorio6.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Regulatorio6Component
  ],
  imports: [
    CommonModule,
    Regulatorio6RoutingModule,
    HomeModule
  ]
})
export class Regulatorio6Module { }
