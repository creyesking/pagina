import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad2Component } from './novedad2.component';

const routes: Routes = [{ path: '', component: Novedad2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad2RoutingModule { }
