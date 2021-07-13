import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad7Component } from './novedad7.component';

const routes: Routes = [{ path: '', component: Novedad7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad7RoutingModule { }
