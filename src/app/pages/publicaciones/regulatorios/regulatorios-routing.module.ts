import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulatoriosComponent } from './regulatorios.component';

const routes: Routes = [{ path: '', component: RegulatoriosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulatoriosRoutingModule { }
