import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad2Component } from './actualidad2.component';

const routes: Routes = [{ path: '', component: Actualidad2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad2RoutingModule { }
