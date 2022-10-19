import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { BioComponent } from './bio/bio.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionHomeComponent,
    children: [
      { path: '', component: BioComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
