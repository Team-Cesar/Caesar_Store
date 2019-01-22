import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { HomeComponent } from '../pages/home/home.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
        { path: '', component: PagesComponent},
        { path: '***', component: AddToCartComponent},
        { path: 'addToCart', component: AddToCartComponent},
        { path: 'checkout', component: CheckoutComponent},
        { path: 'shop-list', component: ShopListComponent},
        { path: 'home', component: HomeComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        ]
    }
// tslint:disable-next-line:eofline
];

export const SHOPPING_ROUTES = RouterModule.forChild( pagesRoutes );
