import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadesDeNegocioComponent } from './unidades-de-negocio.component';

const routes: Routes = [
  { path: '', component: UnidadesDeNegocioComponent },
  {
    path: 'comercializacion',
    loadChildren: () =>
      import('./comercializacion/comercializacion.module').then(
        (m) => m.ComercializacionModule
      ),
  },
  {
    path: 'hospitalaria',
    loadChildren: () =>
      import('./hospitalaria/hospitalaria.module').then(
        (m) => m.HospitalariaModule
      ),
  },
  {
    path: 'dispensacion',
    loadChildren: () =>
      import('./dispensacion/dispensacion.module').then(
        (m) => m.DispensacionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadesDeNegocioRoutingModule {}
