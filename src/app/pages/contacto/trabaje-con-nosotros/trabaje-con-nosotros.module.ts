import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajeConNosotrosRoutingModule } from './trabaje-con-nosotros-routing.module';
import { TrabajeConNosotrosComponent } from './trabaje-con-nosotros.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    TrabajeConNosotrosComponent
  ],
  imports: [
    CommonModule,
    TrabajeConNosotrosRoutingModule,
    HomeModule
  ]
})
export class TrabajeConNosotrosModule { }
