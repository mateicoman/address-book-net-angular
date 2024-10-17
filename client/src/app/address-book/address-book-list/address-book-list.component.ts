import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../models/person';
import { MatSort, Sort } from '@angular/material/sort';
import { AddressBookService } from '../address-book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddressBookDetailsPopupComponent } from '../address-book-details-popup/address-book-details-popup.component';

@Component({
  selector: 'app-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrl: './address-book-list.component.scss'
})
export class AddressBookListComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  showDetails: boolean = false;

  columns: string[] = ['select', 'name', 'address', "phoneNumber"];
  dataSource!: MatTableDataSource<Person>;

  constructor(private addressBookService: AddressBookService, private dialog: MatDialog){}

  ngOnInit(): void {

    this.getPersons();
  }

  private getPersons() {
    this.addressBookService.find()
      .subscribe(persons => {
        this.dataSource = new MatTableDataSource(persons);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  };

  seePerson(personId: string) {
    this.addressBookService.findById(personId)
    .subscribe(person => {
      console.log(person)
      if (person) {
        const dialogRef = this.dialog.open(AddressBookDetailsPopupComponent, {
          data: person,
        });
      }
    })
  }
}

