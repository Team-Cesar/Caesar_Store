import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './components/pages/pages.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NopagefoundComponent } from './components/pages/nopagefound/nopagefound.component';


const appRoutes: Routes = [
    { path: '', component: PagesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
     { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes );
