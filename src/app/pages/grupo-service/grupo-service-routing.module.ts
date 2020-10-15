import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoServicePage } from './grupo-service.page';

const routes: Routes = [
  {
    path: '',
    component: GrupoServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupoServicePageRoutingModule {}
