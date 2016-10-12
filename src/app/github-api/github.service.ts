import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Github {
  apiUrl: string = 'https://api.github.com/';
  constructor(public http: Http) {}

  getUsers(option: {location: string, sort: string, order: string}) {
    return this.http.get(
      `${this.apiUrl}search/users?` +
      `q=location:${option.location}` +
      `&sort=${option.sort}&order=${option.order}`
    ).map(res => res.json());
  }

  getUser(option: {login: string}) {
    return this.http.get(
      `${this.apiUrl}users/${option.login}`
    ).map(res => res.json());
  }

}
