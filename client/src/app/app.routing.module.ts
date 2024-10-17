import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';

const routes: Routes = [
  { path: '', component: AddressBookComponent, data: { breadcrumb: '' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}