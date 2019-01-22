import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import {app_routing} from './app.routes';


import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { PhoneComponent } from './components/body/phone/phone.component';
import { TabletComponent } from './components/body/tablet/tablet.component';
import { CameraComponent } from './components/body/camera/camera.component';
import { RedesComponent } from './components/redes/redes.component';
import { CarritoComponent } from './components/carrito/carrito.component';






@NgModule({
  declarations: [
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
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
