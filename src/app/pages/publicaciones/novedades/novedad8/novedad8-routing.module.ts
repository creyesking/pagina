import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad8Component } from './novedad8.component';

const routes: Routes = [{ path: '', component: Novedad8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad8RoutingModule { }
