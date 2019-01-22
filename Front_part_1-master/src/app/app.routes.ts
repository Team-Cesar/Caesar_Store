import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {PhoneComponent} from './components/body/phone/phone.component';
import { TabletComponent } from './components/body/tablet/tablet.component';
import { CameraComponent } from './components/body/camera/camera.component';

const ROUTES: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'tablet', component: TabletComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'cart', component: CameraComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const app_routing = RouterModule.forRoot(ROUTES);

