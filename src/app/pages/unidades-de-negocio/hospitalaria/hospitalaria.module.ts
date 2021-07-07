import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalariaRoutingModule } from './hospitalaria-routing.module';
import { HospitalariaComponent } from './hospitalaria.component';


@NgModule({
  declarations: [
    HospitalariaComponent
  ],
  imports: [
    CommonModule,
    HospitalariaRoutingModule
  ]
})
export class HospitalariaModule { }
