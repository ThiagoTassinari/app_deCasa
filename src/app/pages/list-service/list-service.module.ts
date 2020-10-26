import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpandableComponent } from './../../components/expandable/expandable.component';
import { IonicModule } from '@ionic/angular';

import { ListServicePageRoutingModule } from './list-service-routing.module';

import { ListServicePage } from './list-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListServicePageRoutingModule,
  ],
  declarations: [ListServicePage, ExpandableComponent]
})
export class ListServicePageModule {}
