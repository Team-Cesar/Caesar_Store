import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';

const APP_ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
];

/* export const APP_ROUTING = RouterModule.forRoot(app_routes); */
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
