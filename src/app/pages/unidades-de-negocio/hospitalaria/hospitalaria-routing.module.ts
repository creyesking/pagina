import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalariaComponent } from './hospitalaria.component';

const routes: Routes = [{ path: '', component: HospitalariaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalariaRoutingModule {}
