import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad7Component } from './actualidad7.component';

const routes: Routes = [{ path: '', component: Actualidad7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad7RoutingModule { }
