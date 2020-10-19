import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartServicePageRoutingModule } from './cart-service-routing.module';

import { CartServicePage } from './cart-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartServicePageRoutingModule
  ],
  declarations: [CartServicePage]
})
export class CartServicePageModule {}
