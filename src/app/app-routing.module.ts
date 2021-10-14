import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksNewComponent } from './books/books-new/books-new.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksListComponent },
  { path: 'books/new', component: BooksNewComponent },
  { path: 'books/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
