import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto.component';

const routes: Routes = [{ path: '', component: ContactoComponent }, { path: 'directorio', loadChildren: () => import('./directorio/directorio.module').then(m => m.DirectorioModule) }, { path: 'trabaje-con-nosotros', loadChildren: () => import('./trabaje-con-nosotros/trabaje-con-nosotros.module').then(m => m.TrabajeConNosotrosModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
