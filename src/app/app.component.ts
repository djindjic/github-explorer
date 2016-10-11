import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <main>
      <div class="search-holder">
        <div class="input-group">
          <span class="input-group-addon">
            Location
          </span>
          <input
            type="text"
            class="form-control"
            [value]="appState.get('location')"
            (input)="appState.set('location', $event.target.value)"
            aria-describedby="basic-addon1"
            autofocus>
        </div>
      </div>
      <ul class="nav nav-tabs">
        <li role="presentation"
            [routerLink]=" ['./'] "
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active">
          <a>
            Rookies
          </a>
        </li>
        <li role="presentation"
            [routerLink]=" ['./seniors'] "
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active">
          <a>
            BY seniors
          </a>
        </li>
        <li role="presentation"
            [routerLink]=" ['./followers'] "
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active">
          <a>
            BY FOLLOWERS
          </a>
        </li>
      </ul>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    this.appState.set('location', 'Serbia');
  }

}