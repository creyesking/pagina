import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad10Component } from './actualidad10.component';

const routes: Routes = [{ path: '', component: Actualidad10Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad10RoutingModule { }
