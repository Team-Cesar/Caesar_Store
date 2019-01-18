import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PostPurchaseComponent } from './components/post-purchase/post-purchase.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

const routes:Routes = [
  {
    path: '', component: AddToCartComponent
  },
  {
    path: '***', component: AddToCartComponent
  },
  {
    path: 'addToCart', component: AddToCartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'shop-list', component: ShopListComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    CheckoutComponent,
    PostPurchaseComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
