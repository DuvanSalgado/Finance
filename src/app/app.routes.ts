import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('@footer').then((c) => c.FooterComponent),
    children: [
      {
        path: 'expenses',
        loadChildren: () =>
          import('./views/expenses/expenses.routes').then(
            (r) => r.EXPENSES_ROUTES
          ),
      },
    ],
  },
];
