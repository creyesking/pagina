import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad9Component } from './actualidad9.component';

const routes: Routes = [{ path: '', component: Actualidad9Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad9RoutingModule { }
