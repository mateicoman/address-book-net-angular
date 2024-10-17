import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Person } from './models/person';

@Injectable()
export class AddressBookService {

  constructor(private http: HttpClient) {}

  find() {
    const url = `${environment.apiUrl}address-book`;
    return this.http.get<Person[]>(url);
  }

  findById(id: string) {
    const url = `${environment.apiUrl}address-book/${id}`;
    return this.http.get<Person>(url);
  }
}