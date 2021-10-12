import { Component, OnInit } from '@angular/core';

import Book from '../model/book';
import { BOOKS } from '../model/mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public label: string = 'BooksComponent';

  public booksList: Book[] = [];

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.booksList = BOOKS;
    }, 1000);
  }

}
