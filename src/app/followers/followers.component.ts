import { Component } from '@angular/core';

import { AppState } from '../app.service';
// import { Title } from './title';

@Component({
  selector: 'followers',
  // providers: [
  //   Title
  // ],
  styleUrls: [ './followers.component.scss' ],
  templateUrl: './followers.component.html'
})
export class Followers {
  constructor(public appState: AppState) {
    console.log('followers', appState);
  }

  ngOnInit() {
    console.log('hello `Followers` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
