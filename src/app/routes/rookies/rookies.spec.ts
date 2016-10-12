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

import { AppState } from '../../app.service';
import { Github } from '../../github-api';
import { Rookies } from './rookies.component';

describe('rookies', () => {
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
      Github,
      Rookies
    ]
  }));

  it('should log ngOnInit', inject([ Rookies ], (rookies: Rookies) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    rookies.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
