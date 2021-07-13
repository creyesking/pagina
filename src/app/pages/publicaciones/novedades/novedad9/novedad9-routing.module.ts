import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad9Component } from './novedad9.component';

const routes: Routes = [{ path: '', component: Novedad9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad9RoutingModule { }
