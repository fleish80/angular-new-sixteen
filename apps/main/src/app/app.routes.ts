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
      {
        path: 'router-after',
        loadComponent: () => import('./router-after.component').then(m => m.RouterAfterComponent),
        title: 'Router Before',
      },
      {
        path: 'destroy-ref',
        loadComponent: () => import('./destroy-ref.component').then(m => m.DestroyRefComponent),
        title: 'Destriy Ref',
      },
      {
        path: 'destroy-ref-usage',
        loadComponent: () => import('./destroy-ref-usage.component').then(m => m.DestroyRefUsageComponent),
        title: 'Destriy Ref Usage',
      },
];
