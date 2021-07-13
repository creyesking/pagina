import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercializacionRoutingModule } from './comercializacion-routing.module';
import { ComercializacionComponent } from './comercializacion.component';
import { HomeModule } from '../../home/home.module';

@NgModule({
  declarations: [ComercializacionComponent],
  imports: [CommonModule, ComercializacionRoutingModule, HomeModule],
})
export class ComercializacionModule {}
