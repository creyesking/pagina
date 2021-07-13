import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualidadComponent } from './actualidad.component';

const routes: Routes = [
  { path: '', component: ActualidadComponent },
  {
    path: 'alerta-sanitaria-de-ranitidina-septiembre-2020',
    loadChildren: () =>
      import('./actualidad1/actualidad1.module').then(
        (m) => m.Actualidad1Module
      ),
  },
  {
    path: 'automedicacion-para-covid-19-genera-nuevos-retos-en-la-resistencia-antimicrobiana',
    loadChildren: () =>
      import('./actualidad2/actualidad2.module').then(
        (m) => m.Actualidad2Module
      ),
  },
  {
    path: 'desabastecimiento-de-medicamentos-en-colombia',
    loadChildren: () =>
      import('./actualidad3/actualidad3.module').then(
        (m) => m.Actualidad3Module
      ),
  },
  {
    path: 'desabastecimiento-de-medicamentos-un-fenomeno-prevenible',
    loadChildren: () =>
      import('./actualidad4/actualidad4.module').then(
        (m) => m.Actualidad4Module
      ),
  },
  {
    path: 'entre-todos-controlamos-la-propagacion-del-covid-19',
    loadChildren: () =>
      import('./actualidad5/actualidad5.module').then(
        (m) => m.Actualidad5Module
      ),
  },
  {
    path: 'esfuerzo-nacional-para-evitar-el-desabastecimiento-de-medicamentos',
    loadChildren: () =>
      import('./actualidad6/actualidad6.module').then(
        (m) => m.Actualidad6Module
      ),
  },
  {
    path: 'la-profesion-celebra-el-dia-mundial-del-farmaceutico-trabajando-por-la-seguridad-y-efectividad-de-los-farmacos',
    loadChildren: () =>
      import('./actualidad7/actualidad7.module').then(
        (m) => m.Actualidad7Module
      ),
  },
  {
    path: 'las-maneras-mas-comunes-de-contagiarse-de-covid-19-tras-la-reapertura',
    loadChildren: () =>
      import('./actualidad8/actualidad8.module').then(
        (m) => m.Actualidad8Module
      ),
  },
  {
    path: 'limpieza-y-desinfeccion-en-la-vivienda',
    loadChildren: () =>
      import('./actualidad9/actualidad9.module').then(
        (m) => m.Actualidad9Module
      ),
  },
  {
    path: 'noticias-en-salud-covid-19',
    loadChildren: () =>
      import('./actualidad10/actualidad10.module').then(
        (m) => m.Actualidad10Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualidadRoutingModule {}
