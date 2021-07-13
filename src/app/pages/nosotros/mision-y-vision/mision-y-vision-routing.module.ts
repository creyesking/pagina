import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionYVisionComponent } from './mision-y-vision.component';

const routes: Routes = [{ path: '', component: MisionYVisionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisionYVisionRoutingModule {}
