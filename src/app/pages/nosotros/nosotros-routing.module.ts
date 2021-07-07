import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';

const routes: Routes = [{ path: '', component: NosotrosComponent }, { path: 'quienes-somos', loadChildren: () => import('./quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule) }, { path: 'valores-corporativos', loadChildren: () => import('./valores-corporativos/valores-corporativos.module').then(m => m.ValoresCorporativosModule) }, { path: 'mision-y-vision', loadChildren: () => import('./mision-y-vision/mision-y-vision.module').then(m => m.MisionYVisionModule) }, { path: 'politicas', loadChildren: () => import('./politicas/politicas.module').then(m => m.PoliticasModule) }, { path: 'certificaciones', loadChildren: () => import('./certificaciones/certificaciones.module').then(m => m.CertificacionesModule) }, { path: 'politica-de-tratamiento-de-datos', loadChildren: () => import('./politica-de-tratamiento-de-datos/politica-de-tratamiento-de-datos.module').then(m => m.PoliticaDeTratamientoDeDatosModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
