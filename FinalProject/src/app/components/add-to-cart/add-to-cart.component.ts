import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Image } from 'src/app/models/Image';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';
// import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.sass']
})
export class AddToCartComponent implements OnInit {
  // public product:Product = new Product();
  // public products:Array<Product> = new Array<Product>();
  // public message:string;
  // public images:Array<Image> = new Array<Image>();
  // public image:Image = new Image();
  public purchase:Purchase = new Purchase();
  public purchases:Array<Purchase> = new Array<Purchase>();
  public user:User = new User();
  // public images:Array<object> = new Array<object>();
  constructor() {
    // this.user.user_name = "Daniele";
    // this.user.user_email = "daniele@user.com";
    
    // let purchase = new Purchase();
    // this.purchase.purch_amount = 1;
    // this.purchase.purch_currency = "PEN";
    // this.purchase.purch_date = new Date();
    // this.purchase.purch_price = 732.2;
    // this.purchase.purch_prod = "Xiaomi Redmi Note 5";
    // this.purchase.purch_state = "Correcto";
    // this.purchase.purch_totalPay = 732.2;
    // this.purchase.purch_image = "http://placehold.it/100x100";

    // this.purchases.push(this.purchase);
    // this.user.purchases_list.push(this.purchase);
    // this.user.purchases_list.);
    
    // let purchase2 = new Purchase();
    // this.purchase.purch_amount = 1;
    // this.purchase.purch_currency = "PEN";
    // this.purchase.purch_date = new Date();
    // this.purchase.purch_price = 1200.2;
    // this.purchase.purch_prod = "iPhone 9";
    // this.purchase.purch_state = "Correcto";
    // this.purchase.purch_totalPay = 1200.2;
    // this.purchase.purch_image = "http://placehold.it/100x100";
    // this.purchases.push(this.purchase);
    
    // this.user.purchases_list = this.purchases;
    
    
    // localStorage.setItem("shopping_cart",JSON.stringify(this.user));
    if(localStorage.getItem("User")){
      this.user = JSON.parse(localStorage.getItem("User"));
    }else{
      this.user.user_role = 3;
      this.user.user_name = "Invitado";
      this.user.purchases_list = this.purchases;
    }
    this.purchases = this.user.purchases_list;
    console.log("[AddToCartComponent|constructor] user:");
    console.log(this.user);
    console.log("[AddToCartComponent|constructor] purchases:");
    console.log(this.purchases);
  }
  
  ngOnInit() {
  }
  
  registrarproduct(){
    this.purchase.purch_date = new Date();
    // this.purchase.purch_prod = "iPhone 9";
    this.purchase.purch_currency = "PEN";
    this.purchase.purch_amount = 1;
    // this.purchase.purch_price = 1200.2;
    this.purchase.purch_totalPay = this.purchase.purch_price;
    this.purchase.purch_state = "Correcto";
    this.purchase.purch_image = "http://placehold.it/100x100";
    
    console.log("[AddToCartComponent|registrarproduct] purchase:");
    console.log(this.purchase);
    
    this.purchases.push(this.purchase);
    console.log("[AddToCartComponent|constructor] purchases:");
    console.log(this.purchases);

    this.user.purchases_list = this.purchases;

    localStorage.setItem("User",JSON.stringify(this.user));
    // console.log("[AddToCartComponent|registrarProducto] products:");
    // console.log(this.products);
    // this._data.enviarProductos(this.product);
  }
}