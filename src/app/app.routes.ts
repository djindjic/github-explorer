import { Routes, RouterModule } from '@angular/router';
import { Rookies } from './rookies';
import { Followers } from './followers';
import { Repos } from './repos';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',          component: Rookies },
  { path: 'followers', component: Followers },
  { path: 'repos',     component: Repos },
  { path: '**',        component: NoContent },
];
