import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NewsResponse, Article } from '../../models/article'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private apiUrl = environment.apiUrl; // Store base URL from environment
  private apiKey = environment.apiKey; // Store API key from environment

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getTopHeadlines(): Observable<Article[]> {
    const url = `${this.apiUrl}/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get<NewsResponse>(url).pipe(
      map(response => response.articles),
      catchError(this.handleError<Article[]>('getTopHeadlines', []))
    );
  }

  getEditorsPick(): Observable<Article[]> {
    const url = `${this.apiUrl}/everything?q=editor&sortBy=relevance&apiKey=${this.apiKey}`;
    return this.http.get<NewsResponse>(url).pipe(
      map(response => response.articles),
      catchError(this.handleError<Article[]>('getEditorsPick', []))
    );
  }

  getTrending(): Observable<Article[]> {
    const url = `${this.apiUrl}/everything?q=trending&apiKey=${this.apiKey}`;
    return this.http.get<NewsResponse>(url).pipe(
      map(response => response.articles),
      catchError(this.handleError<Article[]>('getTrending', []))
    );
  }

  getPoliticsNews(): Observable<Article[]> {
    const url = `${this.apiUrl}/top-headlines?category=politics&apiKey=${this.apiKey}`;
    return this.http.get<NewsResponse>(url).pipe(
      map(response => response.articles),
      catchError(this.handleError<Article[]>('getPoliticsNews', []))
    );
  }

  getBusinessNews(): Observable<Article[]> {
    const url = `${this.apiUrl}/top-headlines?category=business&apiKey=${this.apiKey}`;
    return this.http.get<NewsResponse>(url).pipe(
      map(response => response.articles),
      catchError(this.handleError<Article[]>('getBusinessNews', []))
    );
  }
}

