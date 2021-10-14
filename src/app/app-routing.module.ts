import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { booksRoutes } from './books/books.routes';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', children: booksRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
