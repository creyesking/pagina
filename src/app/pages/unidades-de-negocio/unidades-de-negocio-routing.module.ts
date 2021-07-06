import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesDeNegocioComponent } from './unidades-de-negocio.component';

const routes: Routes = [{ path: '', component: UnidadesDeNegocioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesDeNegocioRoutingModule { }
