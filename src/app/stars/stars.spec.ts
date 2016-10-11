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
import { Stars } from './stars.component';
// import { Title } from './title';

describe('Stars', () => {
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
      Stars
    ]
  }));

  it('should log ngOnInit', inject([ Stars ], (stars: Stars) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    stars.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
