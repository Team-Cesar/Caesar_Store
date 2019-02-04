import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { ADMIN_ROUTES } from './admin.routes';

import { KeysPipe } from './pipes/keys.pipe';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { AdminComponent } from './admin.component';
import { VendedoresComponent } from './usuariosAdmin/vendedores/vendedores.component';
import { ClientesComponent } from './usuariosAdmin/clientes/clientes.component';
import { AdministradoresComponent } from './usuariosAdmin/administradores/administradores.component';
import { Accesorios1Component } from './pagesAdmin/accesorios1/accesorios1.component';
import { Camaras1Component } from './pagesAdmin/camaras1/camaras1.component';
import { Celulares1Component } from './pagesAdmin/celulares1/celulares1.component';
import { Tablets1Component } from './pagesAdmin/tablets1/tablets1.component';
import { Accesorio1Component } from './pagesAdmin/accesorios1/accesorio1.component';
import { Camara1Component } from './pagesAdmin/camaras1/camara1.component';
import { Tablet1Component } from './pagesAdmin/tablets1/tablet1.component';
import { CelularesService } from './services/celulares.service';
import { Celular1Component } from './pagesAdmin/celulares1/celular1.component';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ADMIN_ROUTES,
        FormsModule
    ],
    declarations: [
        NopagefoundComponent,
        HeaderadminComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderadminComponent,
        AdminComponent,
        VendedoresComponent,
        ClientesComponent,
        AdministradoresComponent,
        Accesorio1Component,
        Accesorios1Component,
        Celular1Component,
        Celulares1Component,
        Camaras1Component,
        Camara1Component,
        Tablet1Component,
        Tablets1Component,
        KeysPipe,
    ],
    exports: [
        NopagefoundComponent,
        HeaderadminComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderadminComponent,
        AdminComponent,
        VendedoresComponent,
        ClientesComponent,
        AdministradoresComponent,
        Accesorio1Component,
        Accesorios1Component,
        Celular1Component,
        Celulares1Component,
        Camaras1Component,
        Camara1Component,
        Tablet1Component,
        Tablets1Component,
    ],
    providers: [
        CelularesService
      ],

})
export class AdminModule { }
