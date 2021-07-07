import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuestrosProveedoresRoutingModule } from './nuestros-proveedores-routing.module';
import { NuestrosProveedoresComponent } from './nuestros-proveedores.component';


@NgModule({
  declarations: [
    NuestrosProveedoresComponent
  ],
  imports: [
    CommonModule,
    NuestrosProveedoresRoutingModule
  ]
})
export class NuestrosProveedoresModule { }
