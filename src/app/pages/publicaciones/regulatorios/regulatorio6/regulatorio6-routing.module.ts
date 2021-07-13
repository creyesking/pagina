import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regulatorio6Component } from './regulatorio6.component';

const routes: Routes = [{ path: '', component: Regulatorio6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Regulatorio6RoutingModule { }
