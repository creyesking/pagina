import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorioRoutingModule } from './directorio-routing.module';
import { DirectorioComponent } from './directorio.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [DirectorioComponent],
  imports: [CommonModule, DirectorioRoutingModule, HomeModule],
})
export class DirectorioModule {}
