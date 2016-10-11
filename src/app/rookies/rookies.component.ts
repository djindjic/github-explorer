import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Github } from '../github-api';

@Component({
  selector: 'rookies',
  styleUrls: [ './rookies.component.scss' ],
  templateUrl: './rookies.component.html'
})
export class rookies {
  list: any[];
  constructor(
    public appState: AppState,
    public github: Github
  ) {
      github.getData().subscribe((data) => {
        console.log('rookies', data);
        this.list = data.items;
      });
  }

  ngOnInit() {
    console.log('hello `rookies` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
