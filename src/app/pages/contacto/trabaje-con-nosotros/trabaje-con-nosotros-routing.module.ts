import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajeConNosotrosComponent } from './trabaje-con-nosotros.component';

const routes: Routes = [{ path: '', component: TrabajeConNosotrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabajeConNosotrosRoutingModule {}
