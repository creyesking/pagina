import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticaDeTratamientoDeDatosRoutingModule } from './politica-de-tratamiento-de-datos-routing.module';
import { PoliticaDeTratamientoDeDatosComponent } from './politica-de-tratamiento-de-datos.component';


@NgModule({
  declarations: [
    PoliticaDeTratamientoDeDatosComponent
  ],
  imports: [
    CommonModule,
    PoliticaDeTratamientoDeDatosRoutingModule
  ]
})
export class PoliticaDeTratamientoDeDatosModule { }
