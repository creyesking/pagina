import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualidadComponent } from './actualidad.component';

const routes: Routes = [{ path: '', component: ActualidadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualidadRoutingModule { }
