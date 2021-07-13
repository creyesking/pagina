import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuestrosProveedoresRoutingModule } from './nuestros-proveedores-routing.module';
import { NuestrosProveedoresComponent } from './nuestros-proveedores.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [NuestrosProveedoresComponent],
  imports: [CommonModule, NuestrosProveedoresRoutingModule, HomeModule],
})
export class NuestrosProveedoresModule {}
