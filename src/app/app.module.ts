import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './books/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
