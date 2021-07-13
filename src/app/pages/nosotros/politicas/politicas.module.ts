import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticasRoutingModule } from './politicas-routing.module';
import { PoliticasComponent } from './politicas.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [PoliticasComponent],
  imports: [CommonModule, PoliticasRoutingModule, HomeModule],
})
export class PoliticasModule {}
