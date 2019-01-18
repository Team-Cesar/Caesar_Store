import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

],
exports: [
AccesoriosComponent,
CamarasComponent,
CelularesComponent,
HeaderComponent,
HomeComponent,
NopagefoundComponent,
TabletsComponent,
PagesComponent
],
imports: [
    BrowserModule,
    PAGES_ROUTES,
    RouterModule,
    FormsModule
]
})
export class PagesModule { }