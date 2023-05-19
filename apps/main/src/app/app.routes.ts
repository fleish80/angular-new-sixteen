import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'router-before'
      },
      {
        path: 'router-before',
        loadComponent: () => import('./router-before.component').then(m => m.RouterBeforeComponent),
        title: 'Router Before',
      },
];
