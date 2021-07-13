import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComercializacionComponent } from './comercializacion.component';

const routes: Routes = [{ path: '', component: ComercializacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercializacionRoutingModule {}
