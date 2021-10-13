import { Component, OnInit } from '@angular/core';
import IBook from '../../model/book';
import { BooksService } from '../../books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  public book?: IBook;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.booksService.getBook(id)
      .subscribe((book: IBook) => this.book = book);
  }

}
