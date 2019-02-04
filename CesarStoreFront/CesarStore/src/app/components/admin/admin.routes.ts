import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AdministradoresComponent } from './usuariosAdmin/administradores/administradores.component';
import { ClientesComponent } from './usuariosAdmin/clientes/clientes.component';
import { VendedoresComponent } from './usuariosAdmin/vendedores/vendedores.component';

import { Accesorios1Component } from './pagesAdmin/accesorios1/accesorios1.component';
import { Accesorio1Component } from './pagesAdmin/accesorios1/accesorio1.component';
import { Camaras1Component } from './pagesAdmin/camaras1/camaras1.component';
import { Camara1Component } from './pagesAdmin/camaras1/camara1.component';
import { Celulares1Component } from './pagesAdmin/celulares1/celulares1.component';
import { Celular1Component } from './pagesAdmin/celulares1/celular1.component';
import { Tablets1Component } from './pagesAdmin/tablets1/tablets1.component';
import { Tablet1Component } from './pagesAdmin/tablets1/tablet1.component';
import { ModuleWithProviders } from '@angular/core';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'celular/:id', component: Celular1Component },
            { path: 'celulares1', component: Celulares1Component },
            { path: 'tablets1', component: Tablet1Component },
            { path: 'tablet1', component: Tablets1Component },
            { path: 'camaras1', component: Camara1Component },
            { path: 'camara1', component: Camaras1Component },
            { path: 'accesorios1', component: Accesorio1Component },
            { path: 'accesorio', component: Accesorios1Component },
            { path: 'vendedores1', component: VendedoresComponent },
            { path: 'clientes1', component: ClientesComponent },
            { path: 'administradores1', component: AdministradoresComponent },

        ]
    }
// tslint:disable-next-line:eofline
];

export const ADMIN_ROUTES: ModuleWithProviders = RouterModule.forChild( adminRoutes );
