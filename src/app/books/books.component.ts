import { Component, OnInit } from '@angular/core';
import IBook from '../model/book';
import { BooksService } from '../books.service';
import { count } from 'rxjs/operators';

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
    setTimeout(()=>this.getBooks(), 500);
  }

  public hasBooks(): boolean {
    return this.booksList.length > 0 ;
  }

  private getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      console.log(books);
      this.booksList = books;
    });
  }
}
