import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad5Component } from './actualidad5.component';

const routes: Routes = [{ path: '', component: Actualidad5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad5RoutingModule { }
