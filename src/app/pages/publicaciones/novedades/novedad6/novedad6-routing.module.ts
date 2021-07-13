import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad6Component } from './novedad6.component';

const routes: Routes = [{ path: '', component: Novedad6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad6RoutingModule { }
