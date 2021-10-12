import { Component, OnInit, Input } from '@angular/core';
import IBook, { Book }  from '../../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book?: IBook;
  constructor() { }

  ngOnInit(): void {
  }

}
