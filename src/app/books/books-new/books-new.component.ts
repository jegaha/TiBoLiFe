import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BooksService } from '../service/books.service';
import IBook from '../model/book';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-books-new',
  templateUrl: './books-new.component.html',
  styleUrls: ['./books-new.component.css']
})
export class BooksNewComponent implements OnInit {

  bookForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.booksService.saveBook(this.bookForm.value)
      .subscribe((book: IBook) => {
        this.snackbar.open(
          'Buch gespeichert!',
          undefined,
          {
            duration: 2000
          });
        this.router.navigate(['..', book.id], {relativeTo: this.route});
      })
  }
}
