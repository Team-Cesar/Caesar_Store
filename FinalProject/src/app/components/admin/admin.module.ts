import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { AdminComponent } from './admin.component';
import { ADMIN_ROUTES } from './admin.routes';


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ADMIN_ROUTES
    ],
    declarations: [
        NopagefoundComponent,
        HeaderadminComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        HeaderadminComponent,
        AdminComponent
    ],
    exports: [
        NopagefoundComponent,
        HeaderadminComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,
        AdminComponent
    ],

})
export class AdminModule { }
