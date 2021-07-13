import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regulatorio4Component } from './regulatorio4.component';

const routes: Routes = [{ path: '', component: Regulatorio4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Regulatorio4RoutingModule { }
