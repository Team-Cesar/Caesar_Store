import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabletsComponent } from './tablets/tablets.component';
import { CamarasComponent } from './camaras/camaras.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { CelularesComponent } from './celulares/celulares.component';
import { PagesComponent } from './pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './home/home.component';
import { PrecompraComponent } from './precompra/precompra.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'celulares', component: CelularesComponent },
            { path: 'accesorios', component: AccesoriosComponent },
            { path: 'camaras', component: CamarasComponent },
            { path: 'tablets', component: TabletsComponent },
            { path: 'nopagefound', component: NopagefoundComponent },
            { path: 'compra', component: PrecompraComponent },
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})

export class PAGES_ROUTES {};
