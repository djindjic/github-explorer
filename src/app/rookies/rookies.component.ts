import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Github } from '../github-api';

@Component({
  selector: 'rookies',
  styleUrls: [ './rookies.component.scss' ],
  templateUrl: './rookies.component.html'
})
export class Rookies {
  list: any[];
  constructor(
    public appState: AppState,
    public github: Github
  ) {
      github.getData({
        location: appState.get('location'),
        sort: 'joined',
        order: 'desc'
      }).subscribe((data) => {
        this.list = data.items;
      });
  }

  ngOnInit() {
    console.log('hello `rookies` component');
  }
}
