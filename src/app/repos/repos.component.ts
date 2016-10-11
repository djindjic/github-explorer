import { Component } from '@angular/core';

import { AppState } from '../app.service';
// import { Title } from './title';

@Component({
  selector: 'repos',
  // providers: [
  //   Title
  // ],
  styleUrls: [ './repos.component.scss' ],
  templateUrl: './repos.component.html'
})
export class Repos {
  constructor(public appState: AppState) {
    console.log('repos', appState);
  }

  ngOnInit() {
    console.log('hello `Repos` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
