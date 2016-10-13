import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Github } from '../../github-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'seniors',
  styleUrls: [ './seniors.component.scss' ],
  templateUrl: './seniors.component.html'
})
export class Seniors {
  list: any[];
  subscription: Subscription;

  constructor(
    public appState: AppState,
    public github: Github
  ) {
    this.loadUsers(appState.get('location'));
  }

  loadUsers(location: string) {
    this.github.getUsers({
          location: location,
          sort: 'joined',
          order: 'asc'
        }).subscribe((data) => {
          this.list = data.items;
        }, (error: any) => {
          alert(error.json().message);
        });
  }

  ngOnInit() {
    console.log('hello `seniors` component');
    this.subscription = this.appState.subject
                            .debounceTime(400)
                            .subscribe((location: string) => this.loadUsers(location));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
