import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppState } from '../app.service';
import { Followers } from './followers.component';
// import { Title } from './title';

describe('Followers', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      Followers
    ]
  }));

  it('should log ngOnInit', inject([ Followers ], (followers: Followers) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    followers.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
