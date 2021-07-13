import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'notFound',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./pages/nosotros/nosotros.module').then((m) => m.NosotrosModule),
  },
  {
    path: 'unidades-de-negocio',
    loadChildren: () =>
      import('./pages/unidades-de-negocio/unidades-de-negocio.module').then(
        (m) => m.UnidadesDeNegocioModule
      ),
  },
  {
    path: 'portafolio',
    loadChildren: () =>
      import('./pages/portafolio/portafolio.module').then(
        (m) => m.PortafolioModule
      ),
  },
  {
    path: 'publicaciones',
    loadChildren: () =>
      import('./pages/publicaciones/publicaciones.module').then(
        (m) => m.PublicacionesModule
      ),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./pages/contacto/contacto.module').then((m) => m.ContactoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
