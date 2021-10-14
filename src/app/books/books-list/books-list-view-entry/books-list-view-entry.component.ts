import { Component, Input, OnInit } from '@angular/core';
import IBook from '../../../model/book';

@Component({
  selector: 'app-books-list-view-entry',
  templateUrl: './books-list-view-entry.component.html',
  styleUrls: ['./books-list-view-entry.component.css']
})
export class BooksListViewEntryComponent implements OnInit {
  @Input() book?: IBook;
  constructor() { }

  ngOnInit(): void {
  }

}
