import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Github {
  endpointUrl: string = 'https://api.github.com/search/users';
  constructor(public http: Http) {}

  getData(option: {location: string, sort: string, order: string}) {
    return this.http.get(`
      ${this.endpointUrl}?q=location:${option.location}&sort=${option.sort}&order=${option.order}
    `).map(res => res.json());
  }

}