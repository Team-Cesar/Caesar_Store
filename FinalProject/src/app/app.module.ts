import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopListComponent } from './components/shop-list/shop-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PostPurchaseComponent } from './components/post-purchase/post-purchase.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

// FRONT
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { PagesComponent } from './components/pages/pages.component';
// modulos
import { PagesModule } from './components/pages/pages.module';

const routes: Routes = [
  { path: '', component: PagesComponent},
  { path: '***', component: AddToCartComponent},
  { path: 'addToCart', component: AddToCartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'shop-list', component: ShopListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    CheckoutComponent,
    PostPurchaseComponent,
    AddToCartComponent,

    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
