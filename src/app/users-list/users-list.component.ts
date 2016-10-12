import { Component, Input } from '@angular/core';

@Component({
  selector: 'users-list',
  styleUrls: [ './users-list.component.scss' ],
  templateUrl: './users-list.component.html'
})
export class UsersList {
  @Input() list: any;
  constructor() {}

  ngOnInit() {
    console.log('hello `users-list` component');
  }
}
