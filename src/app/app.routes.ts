import { Routes, RouterModule } from '@angular/router';
import { Stars } from './stars';
// import { Stars } from './stars';
// import { Stars } from './stars';
import { About } from './about';
import { NoContent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: Stars },
  { path: 'stars', component: Stars },
  { path: 'about', component: About },
  { path: '**',    component: NoContent },
];
