import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad10Component } from './novedad10.component';

const routes: Routes = [{ path: '', component: Novedad10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad10RoutingModule { }
