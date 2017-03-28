import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Book } from '../types/book';

@Injectable()
export class SearchService {
  constructor() {}
  
  search(term: string): Observable<Book[]> {
    const url = `app/books/?title=${term}`;
    throw new Error('Api not implemented yet');
  }
}
