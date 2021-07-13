import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineasDeProductosRoutingModule } from './lineas-de-productos-routing.module';
import { LineasDeProductosComponent } from './lineas-de-productos.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [LineasDeProductosComponent],
  imports: [CommonModule, LineasDeProductosRoutingModule, HomeModule],
})
export class LineasDeProductosModule {}
