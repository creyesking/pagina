import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualidadRoutingModule } from './actualidad-routing.module';
import { ActualidadComponent } from './actualidad.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [ActualidadComponent],
  imports: [CommonModule, ActualidadRoutingModule, HomeModule],
})
export class ActualidadModule {}
