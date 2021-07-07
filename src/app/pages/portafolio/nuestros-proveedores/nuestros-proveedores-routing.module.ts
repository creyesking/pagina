import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestrosProveedoresComponent } from './nuestros-proveedores.component';

const routes: Routes = [{ path: '', component: NuestrosProveedoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuestrosProveedoresRoutingModule { }
