import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';

const routes: Routes = [
  { path: 'home', component: AddressBookComponent, data: { breadcrumb: 'Home' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}