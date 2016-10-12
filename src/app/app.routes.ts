import { Routes, RouterModule } from '@angular/router';
import { Rookies } from './rookies';
import { Celebrities } from './celebrities';
import { Seniors } from './seniors';
import { Detail } from './detail';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',            component: Rookies },
  { path: 'celebrities', component: Celebrities },
  { path: 'seniors',     component: Seniors },
  { path: 'detail/:login',  component: Detail },
  { path: '**',          component: NoContent },
];
