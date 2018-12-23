import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  private _searchResult: string;
  private header: any;


  constructor(private _http: HttpClient) {
    this.header = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
   }

  getUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users', { headers: this.header });
  }

  public get searchResult(): string {
    return this._searchResult;
  }

  public set searchResult(search: string) {
    this._searchResult = search;
  }

}
