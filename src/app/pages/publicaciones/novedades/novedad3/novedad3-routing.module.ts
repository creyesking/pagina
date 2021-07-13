import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad3Component } from './novedad3.component';

const routes: Routes = [{ path: '', component: Novedad3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad3RoutingModule { }
