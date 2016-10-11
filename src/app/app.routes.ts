import { Routes, RouterModule } from '@angular/router';
import { Stars } from './stars';
import { Followers } from './followers';
import { Repos } from './repos';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',          component: Stars },
  { path: 'followers', component: Followers },
  { path: 'repos',     component: Repos },
  { path: '**',        component: NoContent },
];
