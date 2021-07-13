import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovedadesComponent } from './novedades.component';

const routes: Routes = [
  { path: '', component: NovedadesComponent },
  {
    path: 'comunicado-fin-de-ano-2020',
    loadChildren: () =>
      import('./novedad1/novedad1.module').then((m) => m.Novedad1Module),
  },
  {
    path: 'disponibilidad-de-medicamentos-inyectables-asi-esta-su-situacion',
    loadChildren: () =>
      import('./novedad2/novedad2.module').then((m) => m.Novedad2Module),
  },
  {
    path: 'estos-20-medicamentos-y-productos-dietarios-se-estan-vendiendo-de-manera-ilegal-en-colombia',
    loadChildren: () =>
      import('./novedad3/novedad3.module').then((m) => m.Novedad3Module),
  },
  {
    path: 'inventario-general-ramedicas-2020',
    loadChildren: () =>
      import('./novedad4/novedad4.module').then((m) => m.Novedad4Module),
  },
  {
    path: 'invima-advierte-sobre-la-venta-de-pruebas-rapidas-fraudulentas-para-coronavirus',
    loadChildren: () =>
      import('./novedad5/novedad5.module').then((m) => m.Novedad5Module),
  },
  {
    path: 'mantenimiento-al-certificado',
    loadChildren: () =>
      import('./novedad6/novedad6.module').then((m) => m.Novedad6Module),
  },
  {
    path: 'retiro-del-mercado-de-producto-oxitocina-10-uiml-solucion-inyectable-fresenius-kabi-colombia-sas',
    loadChildren: () =>
      import('./novedad7/novedad7.module').then((m) => m.Novedad7Module),
  },
  {
    path: 'sello-de-calidad-certificado-empresa-biosegura-colombia',
    loadChildren: () =>
      import('./novedad8/novedad8.module').then((m) => m.Novedad8Module),
  },
  {
    path: 'vitales-no-disponibles',
    loadChildren: () =>
      import('./novedad9/novedad9.module').then((m) => m.Novedad9Module),
  },
  {
    path: 'vuelve-la-discusion-por-uno-de-los-medicamentos-mas-caros-de-colombia',
    loadChildren: () =>
      import('./novedad10/novedad10.module').then((m) => m.Novedad10Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadesRoutingModule {}
