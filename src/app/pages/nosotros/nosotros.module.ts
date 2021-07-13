import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [CommonModule, NosotrosRoutingModule, HomeModule],
})
export class NosotrosModule {}
