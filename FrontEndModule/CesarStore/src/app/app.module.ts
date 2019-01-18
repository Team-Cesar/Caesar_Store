import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modulos
import { PagesModule } from './components/pages/pages.module';


// rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdministradorComponent,
   ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
