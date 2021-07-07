import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisionYVisionRoutingModule } from './mision-y-vision-routing.module';
import { MisionYVisionComponent } from './mision-y-vision.component';


@NgModule({
  declarations: [
    MisionYVisionComponent
  ],
  imports: [
    CommonModule,
    MisionYVisionRoutingModule
  ]
})
export class MisionYVisionModule { }
