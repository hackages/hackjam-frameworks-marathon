import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  bookApiUrl: string = 'app/books';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor() {}

  getBooks(): Promise<Book[]> {
    throw new Error('not implemented');
  }

  update(book: Book): Promise<Book> {
    const url = `${this.bookApiUrl}/${book.id}`;
    throw new Error('not implemented');
  }

  create(title: string): Promise<Book> {
    throw new Error('not implemented');
  }

  delete(id: number): Promise<void> {
    const url = `${this.bookApiUrl}/${id}`;
    throw new Error('not implemented');
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getBook(id: number): Promise<Book> {
    throw new Error('not implemented');
  }
}
