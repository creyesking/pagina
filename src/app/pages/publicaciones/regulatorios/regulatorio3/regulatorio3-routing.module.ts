import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regulatorio3Component } from './regulatorio3.component';

const routes: Routes = [{ path: '', component: Regulatorio3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Regulatorio3RoutingModule { }
