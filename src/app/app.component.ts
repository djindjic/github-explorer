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
      <div class="input-group">
        <span class="input-group-addon">
          Language
        </span>
        <input
          type="text"
          class="form-control"
          [value]="appState.get('language')"
          (input)="appState.set('language', $event.target.value)"
          aria-describedby="basic-addon1"
          autofocus>
      </div>
      <ul class="nav nav-tabs">
        <li role="presentation"
            [routerLink]=" ['./'] "
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active">
          <a>
            BY STARS
          </a>
        </li>
        <li role="presentation"
            [routerLink]=" ['./repos'] "
            [routerLinkActiveOptions]="{exact: true}"
            routerLinkActive="active">
          <a>
            BY REPOS
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
    this.appState.set('language', 'javascript');
  }

}