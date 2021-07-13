import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionesComponent } from './publicaciones.component';

const routes: Routes = [
  { path: '', component: PublicacionesComponent },
  {
    path: 'regulatorios',
    loadChildren: () =>
      import('./regulatorios/regulatorios.module').then(
        (m) => m.RegulatoriosModule
      ),
  },
  {
    path: 'actualidad',
    loadChildren: () =>
      import('./actualidad/actualidad.module').then((m) => m.ActualidadModule),
  },
  {
    path: 'novedades',
    loadChildren: () =>
      import('./novedades/novedades.module').then((m) => m.NovedadesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacionesRoutingModule {}
