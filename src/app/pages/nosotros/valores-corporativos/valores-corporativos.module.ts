import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoresCorporativosRoutingModule } from './valores-corporativos-routing.module';
import { ValoresCorporativosComponent } from './valores-corporativos.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [ValoresCorporativosComponent],
  imports: [CommonModule, ValoresCorporativosRoutingModule, HomeModule],
})
export class ValoresCorporativosModule {}
