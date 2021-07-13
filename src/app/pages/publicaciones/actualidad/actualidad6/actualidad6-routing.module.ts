import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad6Component } from './actualidad6.component';

const routes: Routes = [{ path: '', component: Actualidad6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad6RoutingModule { }
