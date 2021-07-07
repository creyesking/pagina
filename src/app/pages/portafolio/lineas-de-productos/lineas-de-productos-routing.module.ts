import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineasDeProductosComponent } from './lineas-de-productos.component';

const routes: Routes = [{ path: '', component: LineasDeProductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LineasDeProductosRoutingModule { }
