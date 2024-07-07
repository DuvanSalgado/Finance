import { Route } from '@angular/router';

export const EXPENSES_ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'overhead',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./expenses.page').then((c) => c.ExpensesPage),
    children: [
      {
        path: 'overhead',
        loadComponent: () =>
          import('./pages/overheads/overheads.page').then(
            (c) => c.OverheadsPage
          ),
      },
      {
        path: 'fixed',
        loadComponent: () =>
          import('./pages/fixed-expenses/fixed-expenses.page').then(
            (c) => c.FixedExpensesPage
          ),
      },
      {
        path: 'category',
        loadComponent: () =>
          import('./pages/category/category.page').then((c) => c.CategoryPage),
      },
    ],
  },
];
