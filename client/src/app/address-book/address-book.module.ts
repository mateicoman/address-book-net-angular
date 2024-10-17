import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { AddressBookComponent } from './address-book.component';
import { AddressBookListComponent } from './address-book-list/address-book-list.component';
import { AddressBookService } from './address-book.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AddressBookDetailsPopupComponent } from './address-book-details-popup/address-book-details-popup.component';

@NgModule({
  declarations: [
    AddressBookComponent,
    AddressBookListComponent,
    AddressBookDetailsPopupComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers:[AddressBookService]
})
export class AddressBookModule { }
