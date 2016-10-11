import { Routes, RouterModule } from '@angular/router';
import { rookies } from './rookies';
import { Followers } from './followers';
import { Repos } from './repos';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',          component: rookies },
  { path: 'followers', component: Followers },
  { path: 'repos',     component: Repos },
  { path: '**',        component: NoContent },
];
