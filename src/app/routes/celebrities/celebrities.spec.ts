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
import { Celebrities } from './celebrities.component';

describe('celebrities', () => {
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
      Celebrities
    ]
  }));

  it('should log ngOnInit', inject([ Celebrities ], (celebrities: Celebrities) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    celebrities.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
