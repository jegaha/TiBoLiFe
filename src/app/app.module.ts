import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksNewComponent } from './books/books-new/books-new.component';
import { HomeComponent } from './home/home.component';
import { BooksListViewComponent } from './books/books-list/books-list-view/books-list-view.component';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { BooksListViewEntryComponent } from './books/books-list/books-list-view-entry/books-list-view-entry.component';
import { BookDetailViewComponent } from './books/book-detail/book-detail-view/book-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailComponent,
    BooksListComponent,
    BooksNewComponent,
    HomeComponent,
    BooksListViewComponent,
    BooksListViewEntryComponent,
    BookDetailViewComponent
  ],
  imports: [
    // angular stuff
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material stuff
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
