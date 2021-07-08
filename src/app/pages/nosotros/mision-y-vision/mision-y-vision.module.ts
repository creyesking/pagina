import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionYVisionRoutingModule } from './mision-y-vision-routing.module';
import { MisionYVisionComponent } from './mision-y-vision.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    MisionYVisionComponent
  ],
  imports: [
    CommonModule,
    MisionYVisionRoutingModule,
    HomeModule
  ]
})
export class MisionYVisionModule { }
