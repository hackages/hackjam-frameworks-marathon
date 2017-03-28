import { Component } from '@angular/core';
import { Book } from '../types/book';
import { AppService } from '../services/app.service';

@Component({
  selector: 'bs-books',
  templateUrl: 'books.template.html',
  styleUrls: ['books.component.css'],
  providers: [ AppService ]
})
export class BooksComponent {
  books: Book[] = [];
  selectedBook: Book;

  constructor(
    ) { }

  getBooks(): void {
   // Get all the books 
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    // Call the service here
  }
  
  delete(book: Book): void {
    // Delete the book
  }

  ngOnInit(): void {
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  gotoDetail(): void {
    // the router service will help here
  }
}

