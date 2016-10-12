import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InternalStateType = { };
  subject: Subject<any>;

  constructor() {
    this.subject = new Subject();
  }

  get state() {
    return this._state = this._clone(this._state);
  }

  get(prop?: any) {
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    this.subject.next(value);
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    return JSON.parse(JSON.stringify( object ));
  }
}
