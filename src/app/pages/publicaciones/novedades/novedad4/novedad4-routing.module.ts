import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad4Component } from './novedad4.component';

const routes: Routes = [{ path: '', component: Novedad4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad4RoutingModule { }
