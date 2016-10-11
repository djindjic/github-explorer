import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Github } from '../github-api';

@Component({
  selector: 'seniors',
  styleUrls: [ './seniors.component.scss' ],
  templateUrl: './seniors.component.html'
})
export class Seniors {
  list: any[];
  constructor(
    public appState: AppState,
    public github: Github
  ) {
      github.getData().subscribe((data) => {
        this.list = data.items;
      });
  }

  ngOnInit() {
    console.log('hello `seniors` component');
  }
}
