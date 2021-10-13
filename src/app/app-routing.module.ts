import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
