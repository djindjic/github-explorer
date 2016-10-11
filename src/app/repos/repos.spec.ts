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
import { Repos } from './repos.component';
// import { Title } from './title';

describe('Repos', () => {
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
      Repos
    ]
  }));

  it('should log ngOnInit', inject([ Repos ], (repos: Repos) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    repos.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
