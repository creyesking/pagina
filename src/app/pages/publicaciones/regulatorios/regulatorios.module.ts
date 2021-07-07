import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulatoriosRoutingModule } from './regulatorios-routing.module';
import { RegulatoriosComponent } from './regulatorios.component';


@NgModule({
  declarations: [
    RegulatoriosComponent
  ],
  imports: [
    CommonModule,
    RegulatoriosRoutingModule
  ]
})
export class RegulatoriosModule { }
