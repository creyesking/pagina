import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticaDeTratamientoDeDatosComponent } from './politica-de-tratamiento-de-datos.component';

const routes: Routes = [{ path: '', component: PoliticaDeTratamientoDeDatosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticaDeTratamientoDeDatosRoutingModule { }
