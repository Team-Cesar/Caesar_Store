import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NopagefoundComponent } from '../pages/nopagefound/nopagefound.component';
import { HomeComponent } from '../pages/home/home.component';

import { AdministradoresComponent } from './usuariosAdmin/administradores/administradores.component';
import { ClientesComponent } from './usuariosAdmin/clientes/clientes.component';
import { VendedoresComponent } from './usuariosAdmin/vendedores/vendedores.component';
import { Accesorios1Component } from './pagesAdmin/accesorios1/accesorios1.component';
import { Camaras1Component } from './pagesAdmin/camaras1/camaras1.component';
import { Celulares1Component } from './pagesAdmin/celulares1/celulares1.component';
import { Tablets1Component } from './pagesAdmin/tablets1/tablets1.component';

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'celulares1', component: Celulares1Component },
            { path: 'tablets1', component: Tablets1Component },
            { path: 'camaras1', component: Camaras1Component },
            { path: 'accesorios1', component: Accesorios1Component },
            { path: 'vendedores1', component: VendedoresComponent },
            { path: 'clientes1', component: ClientesComponent },
            { path: 'administradores1', component: AdministradoresComponent },

        ]
    }
// tslint:disable-next-line:eofline
];

export const ADMIN_ROUTES = RouterModule.forChild( adminRoutes );