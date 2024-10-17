import { Component, OnChanges, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../models/person';
import { MatSort, Sort } from '@angular/material/sort';
import { AddressBookService } from '../address-book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddressBookDetailsPopupComponent } from '../address-book-details-popup/address-book-details-popup.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrl: './address-book-list.component.scss'
})
export class AddressBookListComponent implements OnInit, OnDestroy{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  private _unsubscribed$: Subject<void> = new Subject<void>();

  columns: string[] = ['select', 'firstName','lastName', 'phoneNumber', 'address'];
  dataSource!: MatTableDataSource<Person>;

  constructor(private addressBookService: AddressBookService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.initTable();
  }

  private initTable() {
    this.addressBookService.find()
      .pipe(takeUntil(this._unsubscribed$))
      .subscribe(persons => {
        this.dataSource = new MatTableDataSource(persons);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  };

  seePerson(personId: string) {
    this.addressBookService.findById(personId)
    .pipe(takeUntil(this._unsubscribed$))
    .subscribe(person => {
      console.log(person)
      if (person) {
        const dialogRef = this.dialog.open(AddressBookDetailsPopupComponent, {
          data: person,
        });
      }
    })
  }

  ngOnDestroy() {
    this._unsubscribed$.next();
    this._unsubscribed$.complete();
  }
}

