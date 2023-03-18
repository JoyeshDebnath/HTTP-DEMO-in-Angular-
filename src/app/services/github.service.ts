import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repo } from '../models/Repo';

@Injectable()
export class GitHubService {
  baseUrl: string = `https://api.github.com/`;
  constructor(private http: HttpClient) {}

  params = new HttpParams().set('page', 2).set('sort', 'name');

  getRepos(userName: string): Observable<any> {
    console.log(this.params.toString());
    return this.http
      .get<Repo[]>(`${this.baseUrl}users/${userName}/repos`, {
        responseType: 'json',
        params: this.params,
      })
      .pipe(
        map((data) => {
          console.log('write Some data  transformation code here ...');
          return data;
        }),
        catchError((error) => {
          console.log('ERROR: ', error);
          throw error;
        })
      );
  } //get request .
}
