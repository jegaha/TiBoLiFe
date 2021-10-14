import { Component, Input, OnInit } from '@angular/core';
import IBook from '../../model/book';

@Component({
  selector: 'app-book-detail-view',
  templateUrl: './book-detail-view.component.html',
  styleUrls: ['./book-detail-view.component.css']
})
export class BookDetailViewComponent implements OnInit {

  @Input() public book?: IBook;
  constructor() { }

  ngOnInit(): void {
  }
}
