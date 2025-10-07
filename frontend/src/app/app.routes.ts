import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard-page/dashboard-page.component').then(
        (c) => c.DashboardPageComponent
      ),
    canActivate: [],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then((c) => c.LoginPageComponent),
    canActivate: [],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register-page/register-page.component').then((c) => c.RegisterPageComponent),
    canActivate: [],
  },
];
