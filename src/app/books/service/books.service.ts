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
    const url = '/api/books';
    return this.httpClient.get<IBook[]>(url);
  }

  getBook(id: number): Observable<IBook> {
    const url = '/api/books/' + id;
    return this.httpClient.get<IBook>(url);
  }

  saveBook(book: IBook): Observable<IBook> {
    return (book.id === undefined) ? this.insertBook(book) : this.updateBook(book);
  }

  private insertBook(book: IBook): Observable<IBook> {
    const url = '/api/books';
    return this.httpClient.post<IBook>(url, book);
  }

  private updateBook(book: IBook): Observable<IBook> {
    const url = '/api/books';
    return this.httpClient.put<IBook>(url, book);
  }

}
