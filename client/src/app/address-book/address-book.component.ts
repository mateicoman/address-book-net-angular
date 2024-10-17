import { Component, ViewChild } from '@angular/core';
import { AddressBookService } from './address-book.service';
import { Router } from '@angular/router';
import { AddressBookListComponent } from './address-book-list/address-book-list.component';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.scss'
})
export class AddressBookComponent {
  title = "Address Book"
  @ViewChild(AddressBookListComponent) listComponent!: AddressBookListComponent;
  constructor(private addressBookService: AddressBookService, private router: Router,){}

  addPerson() {
    this.addressBookService.create().subscribe(
      {
        next: () => {
          this.listComponent.ngOnInit();
        },
      }
    );
  }
}
