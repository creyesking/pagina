import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad4Component } from './actualidad4.component';

const routes: Routes = [{ path: '', component: Actualidad4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad4RoutingModule { }
