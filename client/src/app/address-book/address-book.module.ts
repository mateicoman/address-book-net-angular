import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { AddressBookComponent } from './address-book.component';
import { AddressBookListComponent } from './address-book-list/address-book-list.component';
import { AddressBookService } from './address-book.service';

@NgModule({
  declarations: [
    AddressBookComponent,
    AddressBookListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers:[AddressBookService]
})
export class AddressBookModule { }
