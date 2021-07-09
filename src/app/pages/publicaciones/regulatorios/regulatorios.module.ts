import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulatoriosRoutingModule } from './regulatorios-routing.module';
import { RegulatoriosComponent } from './regulatorios.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    RegulatoriosComponent
  ],
  imports: [
    CommonModule,
    RegulatoriosRoutingModule,
    HomeModule
  ]
})
export class RegulatoriosModule { }
