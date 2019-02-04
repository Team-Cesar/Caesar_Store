import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { BodyComponent } from './components/body/body.component';
import { PhoneComponent } from './components/body/phone/phone.component';
import { TabletComponent } from './components/body/tablet/tablet.component';
import { CameraComponent } from './components/body/camera/camera.component';



const APP_ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'home', component: BodyComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'tablet', component: TabletComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'cart', component: CameraComponent },
];


/* export const APP_ROUTING = RouterModule.forRoot(app_routes); */
export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true});
