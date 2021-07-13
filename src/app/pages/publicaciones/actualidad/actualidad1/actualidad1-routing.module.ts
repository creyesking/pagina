import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad1Component } from './actualidad1.component';

const routes: Routes = [{ path: '', component: Actualidad1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad1RoutingModule { }
