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
      Language:
      <input
        [value]="appState.get('language')"
        (input)="appState.set('language', $event.target.value)"
        autofocus>
      <span>
        <a [routerLink]=" ['./'] ">
          BY STARS
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./repos'] ">
          BY REPOS
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./followers'] ">
          BY FOLLOWERS
        </a>
      </span>
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