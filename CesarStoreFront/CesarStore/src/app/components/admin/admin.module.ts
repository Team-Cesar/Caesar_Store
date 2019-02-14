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
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './services/productos.service';
import { NewProductoComponent } from './pagesAdmin/new-producto/new-producto.component';
import { EditProductoComponent } from './pagesAdmin/edit-producto/edit-producto.component';
import { EditarComponent } from './pagesAdmin/editar/editar.component';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ADMIN_ROUTES,
        FormsModule,
        HttpClientModule
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
        Accesorios1Component,
        Celulares1Component,
        Camaras1Component,
        Tablets1Component,
        KeysPipe,
        NewProductoComponent,
        EditProductoComponent,
        EditarComponent,
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
        Accesorios1Component,
        Celulares1Component,
        Camaras1Component,
        Tablets1Component,
    ],
    providers: [
        ProductosService
      ],

})
export class AdminModule { }
