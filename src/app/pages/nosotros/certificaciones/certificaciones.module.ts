import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificacionesRoutingModule } from './certificaciones-routing.module';
import { CertificacionesComponent } from './certificaciones.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    CertificacionesComponent
  ],
  imports: [
    CommonModule,
    CertificacionesRoutingModule,
    HomeModule
  ]
})
export class CertificacionesModule { }
