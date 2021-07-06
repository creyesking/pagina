import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesDeNegocioRoutingModule } from './unidades-de-negocio-routing.module';
import { UnidadesDeNegocioComponent } from './unidades-de-negocio.component';


@NgModule({
  declarations: [
    UnidadesDeNegocioComponent
  ],
  imports: [
    CommonModule,
    UnidadesDeNegocioRoutingModule
  ]
})
export class UnidadesDeNegocioModule { }
