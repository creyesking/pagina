import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regulatorio2Component } from './regulatorio2.component';

const routes: Routes = [{ path: '', component: Regulatorio2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Regulatorio2RoutingModule { }
