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
import { Seniors } from './seniors.component';

describe('seniors', () => {
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
      Seniors
    ]
  }));

  it('should log ngOnInit', inject([ Seniors ], (seniors: Seniors) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    seniors.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
