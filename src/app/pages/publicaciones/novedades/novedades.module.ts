import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovedadesRoutingModule } from './novedades-routing.module';
import { NovedadesComponent } from './novedades.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [NovedadesComponent],
  imports: [CommonModule, NovedadesRoutingModule, HomeModule],
})
export class NovedadesModule {}
