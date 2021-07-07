import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalariaRoutingModule } from './hospitalaria-routing.module';
import { HospitalariaComponent } from './hospitalaria.component';
import { HomeModule } from '../../home/home.module';


@NgModule({
  declarations: [
    HospitalariaComponent
  ],
  imports: [
    CommonModule,
    HospitalariaRoutingModule,
    HomeModule
  ]
})
export class HospitalariaModule { }
