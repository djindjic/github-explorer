import { Routes, RouterModule } from '@angular/router';
import { Rookies } from './rookies';
import { Followers } from './followers';
import { Seniors } from './seniors';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',          component: Rookies },
  { path: 'followers', component: Followers },
  { path: 'seniors',     component: Seniors },
  { path: '**',        component: NoContent },
];
