import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { PostPurchaseComponent } from "./post-purchase/post-purchase.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ShopListComponent } from "./shop-list/shop-list.component";
import { SHOPPING_ROUTES } from './shoppingCart.routes';
import { NgxPayPalModule } from 'ngx-paypal'

@NgModule({

    declarations: [
        AddToCartComponent,
        PostPurchaseComponent,
        CheckoutComponent,
        ShopListComponent
,
    
    ],
    exports: [
        AddToCartComponent,
        PostPurchaseComponent,
        CheckoutComponent,
        ShopListComponent
 
    ],
    imports: [        
        SHOPPING_ROUTES,
        FormsModule, 
        BrowserModule,
        NgxPayPalModule
    ]
    })
    export class ShoppingModule { }
    