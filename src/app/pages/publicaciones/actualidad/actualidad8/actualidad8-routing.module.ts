import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad8Component } from './actualidad8.component';

const routes: Routes = [{ path: '', component: Actualidad8Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad8RoutingModule { }
