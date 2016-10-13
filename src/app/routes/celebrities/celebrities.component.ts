import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Github } from '../../github-api';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'celebrities',
  styleUrls: [ './celebrities.component.scss' ],
  templateUrl: './celebrities.component.html'
})
export class Celebrities {
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
          sort: 'followers',
          order: 'desc'
        })
        .subscribe((data) => {
          this.list = data.items;
        });
  }

  ngOnInit() {
    console.log('hello `celebrities` component');
    this.subscription = this.appState.subject
                            .debounceTime(400)
                            .subscribe((location: string) => this.loadUsers(location));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
