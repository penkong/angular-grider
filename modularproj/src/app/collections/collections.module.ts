import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';
import { BioComponent } from './bio/bio.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';


@NgModule({
  declarations: [
    CollectionHomeComponent,
    TableComponent,
    TabsComponent,
    BioComponent,
    CompaniesComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CollectionsRoutingModule
  ],
  exports: [
  ]
})
export class CollectionsModule { }
