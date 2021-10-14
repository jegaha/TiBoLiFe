import { BooksListComponent } from './books-list/books-list.component';
import { BooksNewComponent } from './books-new/books-new.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { Routes } from '@angular/router';

export const booksRoutes: Routes = [
  {path: '', component: BooksListComponent},
  {path: 'new', component: BooksNewComponent},
  {path: ':id', component: BookDetailComponent}
];
