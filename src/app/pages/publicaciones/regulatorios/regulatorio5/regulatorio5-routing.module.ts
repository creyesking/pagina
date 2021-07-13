import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Regulatorio5Component } from './regulatorio5.component';

const routes: Routes = [{ path: '', component: Regulatorio5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Regulatorio5RoutingModule { }
