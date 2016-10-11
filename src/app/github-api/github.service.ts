import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Github {
  constructor(public http: Http) {}

  getData() {
    return this.http.get('https://api.github.com/search/users?q=location:serbia+sort:joined')
                    .map(res => res.json());
  }

}