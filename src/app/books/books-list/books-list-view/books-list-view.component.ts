import { Component, Input, OnInit } from '@angular/core';
import IBook from '../../../model/book';

@Component({
  selector: 'app-books-list-view',
  templateUrl: './books-list-view.component.html',
  styleUrls: ['./books-list-view.component.css']
})
export class BooksListViewComponent implements OnInit {

  @Input() books: IBook[] = [];
  public columnsToDisplay: string[] = ['id', 'name'];

  constructor() { }

  ngOnInit(): void {
  }

  public hasBooks(): boolean {
    return this.books.length > 0 ;
  }

}
