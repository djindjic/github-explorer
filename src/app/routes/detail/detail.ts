import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Github } from '../../github-api';

@Component({
  selector: 'detail',
  template: `
    <div *ngIf="user">
      <h1>{{user.name}}</h1>
      <div><a href="{{user.html_url}}">{{user.login}}</a></div>
      <div>followers: {{user.followers}}</div>
      <img src="{{user.avatar_url}}" />
    </div>
  `
})
export class Detail {
  @Input() user: any;
  constructor(
    private route: ActivatedRoute,
    private github: Github) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['login'] !== undefined) {
        let login = params['login'];
        this.github.getUser({login: login})
            .subscribe((user) => {
              this.user = user;
            });
      }
    });
  }
}
