import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedad5Component } from './novedad5.component';

const routes: Routes = [{ path: '', component: Novedad5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Novedad5RoutingModule { }
