import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// modulos
import { ShoppingModule } from './components/shoppingCart/shoppingCart.module';
import { AdminModule } from './components/admin/admin.module';

// FRONT-OMAR
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

import { APP_ROUTING } from './app.routes';
import { PagesModule } from './components/pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent
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
