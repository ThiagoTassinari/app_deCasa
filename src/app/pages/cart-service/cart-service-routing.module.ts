import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartServicePage } from './cart-service.page';

const routes: Routes = [
  {
    path: '',
    component: CartServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartServicePageRoutingModule {}
