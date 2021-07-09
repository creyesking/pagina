import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    HomeModule
  ]
})
export class PublicacionesModule { }
