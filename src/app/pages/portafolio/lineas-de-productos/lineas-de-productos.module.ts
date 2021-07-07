import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineasDeProductosRoutingModule } from './lineas-de-productos-routing.module';
import { LineasDeProductosComponent } from './lineas-de-productos.component';


@NgModule({
  declarations: [
    LineasDeProductosComponent
  ],
  imports: [
    CommonModule,
    LineasDeProductosRoutingModule
  ]
})
export class LineasDeProductosModule { }
