import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Github } from '../github-api';

@Component({
  selector: 'stars',
  styleUrls: [ './stars.component.scss' ],
  templateUrl: './stars.component.html'
})
export class Stars {
  list: any[];
  constructor(
    public appState: AppState,
    public github: Github
  ) {
      github.getData().subscribe((data) => {
        console.log('stars', data);
        this.list = data.items;
      });
  }

  ngOnInit() {
    console.log('hello `Stars` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
