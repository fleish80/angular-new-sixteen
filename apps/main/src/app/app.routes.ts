import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'router-before'
      },
      {
        path: 'router-before',
        loadComponent: () => import('./router-before.component'),
        title: 'Router Before',
      },
      {
        path: 'router-after',
        loadComponent: () => import('./router-after.component'),
        title: 'Router Before',
      },
      {
        path: 'destroy-ref',
        loadComponent: () => import('./destroy-ref.component'),
        title: 'Destriy Ref',
      },
      {
        path: 'destroy-ref-usage',
        loadComponent: () => import('./destroy-ref-usage.component'),
        title: 'Destriy Ref Usage',
      },
      {
        path: 'mandatory-input',
        loadComponent: () => import('./manadatory-input.component'),
        title: 'Destriy Ref Usage',
      },
      {
        path: 'last-success-full-navigation',
        loadComponent: () => import('./last-success-full-navigation.component'),
        title: 'Last Success Full Navigation',
      },
      {
        path: 'run-injection-context',
        loadComponent: () => import('./run-injection-context.component'),
        title: 'Run Injection Context',
      },
];
