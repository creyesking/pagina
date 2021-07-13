import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Regulatorio5RoutingModule } from './regulatorio5-routing.module';
import { Regulatorio5Component } from './regulatorio5.component';
import { HomeModule } from '../../../home/home.module';


@NgModule({
  declarations: [
    Regulatorio5Component
  ],
  imports: [
    CommonModule,
    Regulatorio5RoutingModule,
    HomeModule
  ]
})
export class Regulatorio5Module { }
