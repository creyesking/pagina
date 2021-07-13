import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regulatorio1Component } from './regulatorio1.component';

const routes: Routes = [{ path: '', component: Regulatorio1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Regulatorio1RoutingModule { }
