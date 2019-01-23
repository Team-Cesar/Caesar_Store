import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// modulos
import { PagesModule } from './components/pages/pages.module';
import { ShoppingModule } from './components/shoppingCart/shoppingCart.module';
import { AdminModule } from './components/admin/admin.module';




// FRONT-OMAR
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { PagesComponent } from './components/pages/pages.component';

// FRONT-ROGELIO
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { PhoneComponent } from './components/body/phone/phone.component';
import { TabletComponent } from './components/body/tablet/tablet.component';
import { CameraComponent } from './components/body/camera/camera.component';
import { RedesComponent } from './components/redes/redes.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NgSelectMultipleOption } from '@angular/forms/src/directives';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'home', component: BodyComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'tablet', component: TabletComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'cart', component: CameraComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    AppComponent,
    BodyComponent,
    HeaderComponent,
    PhoneComponent,
    TabletComponent,
    CameraComponent,
    RedesComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    ShoppingModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
