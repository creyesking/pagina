import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoresCorporativosRoutingModule } from './valores-corporativos-routing.module';
import { ValoresCorporativosComponent } from './valores-corporativos.component';


@NgModule({
  declarations: [
    ValoresCorporativosComponent
  ],
  imports: [
    CommonModule,
    ValoresCorporativosRoutingModule
  ]
})
export class ValoresCorporativosModule { }
