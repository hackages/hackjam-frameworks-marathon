import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../services/api.books.services';
import {AppComponent} from './app.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {BooksComponent} from '../books/books.component';
import {BookDetailComponent} from '../book-detail/book-detail.component';
import {AppService} from '../services/app.service';
import {BookSearchComponent} from '../book-search/book-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    DashboardComponent,
    BooksComponent,
    BookDetailComponent,
    BookSearchComponent,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
