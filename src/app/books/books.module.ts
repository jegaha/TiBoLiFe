import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksListViewComponent } from './books-list/books-list-view/books-list-view.component';
import { BookDetailViewComponent } from './book-detail/book-detail-view/book-detail-view.component';
import { BooksListViewEntryComponent } from './books-list/books-list-view-entry/books-list-view-entry.component';
import { BooksNewComponent } from './books-new/books-new.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BookDetailComponent,
    BooksListComponent,
    BooksNewComponent,
    BooksListViewComponent,
    BooksListViewEntryComponent,
    BookDetailViewComponent
  ],
  imports: [
    // Angular stuff
    AppRoutingModule,
    CommonModule,

    // Material stuff
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSnackBarModule,

  ]
})
export class BooksModule { }
