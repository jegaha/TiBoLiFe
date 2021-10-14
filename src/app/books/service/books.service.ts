import { Injectable } from '@angular/core';
import IBook from '../model/book'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Observable<IBook[]> {
    const url = '/api/booksapi';
    return this.httpClient.get<IBook[]>(url);
  }

  getBook(id:number):Observable<IBook> {
    const url = '/api/booksapi/' + id;
    return this.httpClient.get<IBook>(url);
  }

}
