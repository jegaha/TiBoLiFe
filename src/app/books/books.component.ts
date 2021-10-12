import { Component, OnInit } from '@angular/core';

import IBook from '../model/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public label: string = 'BooksComponent';
  public booksList: IBook[] = [];

  constructor(
    private booksService: BooksService
  ) {

  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      console.log(books);
      this.booksList = books;
    });
  }
}
