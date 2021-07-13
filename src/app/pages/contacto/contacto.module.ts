import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';

import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRoutingModule, HomeModule],
})
export class ContactoModule {}
