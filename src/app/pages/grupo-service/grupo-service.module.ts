import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrupoServicePageRoutingModule } from './grupo-service-routing.module';

import { GrupoServicePage } from './grupo-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrupoServicePageRoutingModule
  ],
  declarations: [GrupoServicePage]
})
export class GrupoServicePageModule {}
