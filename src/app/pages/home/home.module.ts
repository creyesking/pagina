import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

import { NserviciosComponent } from './components/nservicios/nservicios.component';
import { SnosotrosComponent } from './components/snosotros/snosotros.component';
import { AexperienciaComponent } from './components/aexperiencia/aexperiencia.component';
import { NproveedoresComponent } from './components/nproveedores/nproveedores.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';


@NgModule({
  declarations: [
    HomeComponent,HeaderComponent,FooterComponent, NserviciosComponent, SnosotrosComponent, AexperienciaComponent, NproveedoresComponent, TarjetasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
