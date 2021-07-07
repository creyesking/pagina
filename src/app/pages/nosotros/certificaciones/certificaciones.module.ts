import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificacionesRoutingModule } from './certificaciones-routing.module';
import { CertificacionesComponent } from './certificaciones.component';


@NgModule({
  declarations: [
    CertificacionesComponent
  ],
  imports: [
    CommonModule,
    CertificacionesRoutingModule
  ]
})
export class CertificacionesModule { }
