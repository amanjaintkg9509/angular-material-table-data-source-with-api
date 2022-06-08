import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor(private _http: HttpClient) {}

  getData(page, per_page) {
    return this._http.get(
      `https://reqres.in/api/users?page=${page}&per_page=${per_page}`
    );
  }
}
