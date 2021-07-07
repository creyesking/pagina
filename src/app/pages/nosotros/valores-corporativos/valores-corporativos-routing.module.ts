import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoresCorporativosComponent } from './valores-corporativos.component';

const routes: Routes = [{ path: '', component: ValoresCorporativosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValoresCorporativosRoutingModule { }
