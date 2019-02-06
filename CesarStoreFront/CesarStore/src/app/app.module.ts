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

import { AuthService } from './services/auth.service';

// FRONT-ROGELIO
import { BodyComponent } from './components/body/body.component';

import { PhoneComponent } from './components/body/phone/phone.component';
import { TabletComponent } from './components/body/tablet/tablet.component';
import { CameraComponent } from './components/body/camera/camera.component';

import { CarritoComponent } from './components/carrito/carrito.component';
import { APP_ROUTING } from './app.routes';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    AppComponent,
    BodyComponent,
    
    PhoneComponent,
    TabletComponent,
    CameraComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    PagesModule,
    ShoppingModule,
    AdminModule,

    APP_ROUTING,
    RouterModule
  ],
  providers: [AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
