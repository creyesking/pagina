import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticaDeTratamientoDeDatosRoutingModule } from './politica-de-tratamiento-de-datos-routing.module';
import { PoliticaDeTratamientoDeDatosComponent } from './politica-de-tratamiento-de-datos.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [PoliticaDeTratamientoDeDatosComponent],
  imports: [
    CommonModule,
    PoliticaDeTratamientoDeDatosRoutingModule,
    HomeModule,
  ],
})
export class PoliticaDeTratamientoDeDatosModule {}
