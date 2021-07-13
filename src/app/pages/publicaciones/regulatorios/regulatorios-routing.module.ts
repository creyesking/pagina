import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulatoriosComponent } from './regulatorios.component';

const routes: Routes = [
  { path: '', component: RegulatoriosComponent },
  {
    path: 'actualizacion-lo-unico-constante-es-el-cambio',
    loadChildren: () =>
      import('./regulatorio1/regulatorio1.module').then(
        (m) => m.Regulatorio1Module
      ),
  },
  {
    path: 'alertas-sanitarias-emitidas-por-el-ministerio-de-salud',
    loadChildren: () =>
      import('./regulatorio2/regulatorio2.module').then(
        (m) => m.Regulatorio2Module
      ),
  },
  {
    path: 'circular-11-de-2020-abril-1-de-2020',
    loadChildren: () =>
      import('./regulatorio3/regulatorio3.module').then(
        (m) => m.Regulatorio3Module
      ),
  },
  {
    path: 'comunicado-aclaratorio-de-la-resolucion-315-de-2020',
    loadChildren: () =>
      import('./regulatorio4/regulatorio4.module').then(
        (m) => m.Regulatorio4Module
      ),
  },
  {
    path: 'control-de-precios-pri-precio-de-referencia-internacional',
    loadChildren: () =>
      import('./regulatorio5/regulatorio5.module').then(
        (m) => m.Regulatorio5Module
      ),
  },
  {
    path: 'renovacion-de-registros-sanitarios-decreto-843-de-2016',
    loadChildren: () =>
      import('./regulatorio6/regulatorio6.module').then(
        (m) => m.Regulatorio6Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegulatoriosRoutingModule {}
