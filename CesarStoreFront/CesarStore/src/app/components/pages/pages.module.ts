import { NgModule } from '@angular/core';

import { AccesoriosComponent } from './accesorios/accesorios.component';
import { CamarasComponent } from './camaras/camaras.component';
import { CelularesComponent } from './celulares/celulares.component';

import { HomeComponent } from './home/home.component';

import { TabletsComponent } from './tablets/tablets.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PAGES_ROUTES } from './pages.routes';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RedesComponent } from './redes/redes.component';
import { SidevarrogComponent } from './sidevarrog/sidevarrog.component';
import { PrecompraComponent } from './precompra/precompra.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { PagesContentComponent } from './pages-content.component';

@NgModule({

declarations: [
AccesoriosComponent,
CamarasComponent,
CelularesComponent,
HeaderComponent,
HomeComponent,
NopagefoundComponent,
TabletsComponent,
PagesComponent,
RedesComponent,
SidevarrogComponent,
PrecompraComponent,
PagesContentComponent

],
exports: [
AccesoriosComponent,
CamarasComponent,
CelularesComponent,
HeaderComponent,
HomeComponent,
NopagefoundComponent,
TabletsComponent,
PagesComponent,
],
imports: [
    BrowserModule,
    PAGES_ROUTES,
    FormsModule
],
providers: [AuthService],
})
export class PagesModule { }
