import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actualidad3Component } from './actualidad3.component';

const routes: Routes = [{ path: '', component: Actualidad3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Actualidad3RoutingModule { }
