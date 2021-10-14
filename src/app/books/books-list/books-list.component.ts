import { Component, OnInit } from '@angular/core';
import IBook from '../model/book';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  public books: IBook[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    setTimeout(()=>this.getBooks(), 500);
  }

  public hasBooks(): boolean {
    return this.books?.length > 0;
  }
  private getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      console.log(books);
      this.books = books;
    });
  }
}
