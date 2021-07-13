import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad1Component } from './novedad1.component';

const routes: Routes = [{ path: '', component: Novedad1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad1RoutingModule { }
