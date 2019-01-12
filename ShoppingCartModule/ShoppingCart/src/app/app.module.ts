import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PostPurchaseComponent } from './components/post-purchase/post-purchase.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    CheckoutComponent,
    PostPurchaseComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
