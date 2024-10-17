import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../models/person';
import { takeUntil } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { AddressBookService } from '../address-book.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-address-book-list',
  templateUrl: './address-book-list.component.html',
  styleUrl: './address-book-list.component.scss'
})
export class AddressBookListComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  columns: string[] = ['select', 'name', 'address',];
  selection = new SelectionModel<Person>(false, [], true);
  filterControl = new FormControl('');
  dataSource!: MatTableDataSource<Person>;

  constructor(private addressBookService: AddressBookService){}

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons() {
    this.addressBookService.find()
      .subscribe(persons => {
        console.log(persons);
        this.dataSource = new MatTableDataSource(persons);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  };
}


