import { Component } from '@angular/core';

import { AppState } from '../app.service';
// import { Title } from './title';

@Component({
  selector: 'stars',
  // providers: [
  //   Title
  // ],
  styleUrls: [ './stars.component.scss' ],
  templateUrl: './stars.component.html'
})
export class Stars {
  constructor(public appState: AppState) {
    console.log('stars', appState);
  }

  ngOnInit() {
    console.log('hello `Stars` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
