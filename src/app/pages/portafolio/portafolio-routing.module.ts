import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio.component';

const routes: Routes = [{ path: '', component: PortafolioComponent }, { path: 'lineas-de-productos', loadChildren: () => import('./lineas-de-productos/lineas-de-productos.module').then(m => m.LineasDeProductosModule) }, { path: 'nuestros-proveedores', loadChildren: () => import('./nuestros-proveedores/nuestros-proveedores.module').then(m => m.NuestrosProveedoresModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortafolioRoutingModule { }
