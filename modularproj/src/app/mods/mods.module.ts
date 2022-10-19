import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalsComponent } from './modals/modals.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
