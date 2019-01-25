import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.sass']
})
export class AddToCartComponent implements OnInit {
  public purchase:Purchase = new Purchase();
  // public purchase:Purchase = new Purchase();
  // public purchases:Array<Purchase> = new Array<Purchase>();
  public product:Product = new Product();
  public products:Array<Product> = new Array<Product>();
  public prod_name:string = '';
  public prod_price:string;
  public user:User = new User();
  // public images:Array<object> = new Array<object>();
  constructor() {
    if(localStorage.getItem("User")){
      this.user = JSON.parse(localStorage.getItem("User"));
      // this.user.purchases_list.forEach((purchase)=>{
      this.products = this.user.purchase.prod_details;

      // });
    }else{
      this.user.user_role = 3;
      this.user.user_name = "Invitado";
      this.purchase.prod_details = this.products;
      this.user.purchase = this.purchase;
      
      // this.purchase.purchase_date = new Date();
      // this.product.purch_prod = "Xiami Redmi Note 5";
      // this.product.purch_currency = "PEN";
      // this.product.purch_amount = 1;
      // this.product.purch_price = 732.0;
      // this.product.purch_state = "Correcto";
      // this.product.purch_totalPay = this.product.purch_price;
      // this.product.purch_image = "http://placehold.it/100x100";
      // this.purchase.prod_details = this.product;

      // this.purchases.push(this.purchase);
      localStorage.setItem("User",JSON.stringify(this.user));
    }
    // this.purchases = this.user.purchases_list;
    console.log("[AddToCartComponent|constructor] user:");
    console.log(this.user);
    // console.log("[AddToCartComponent|constructor] purchase:");
    // console.log(this.user.);
    console.log("[AddToCartComponent|constructor] products:");
    console.log(this.products);
  }
  
  ngOnInit() {
  }
  
  registrarProducto(){
    // let purchase = new Purchase();
    let product = new Product();
    // let products = new Array<Product>();
    // this.purchase.purchase_date = new Date();
    this.purchase.purchase_date = new Date();
    //  product = new Product();
    product.prod_name = this.prod_name;
    product.prod_currency = "PEN";
    product.prod_amount = 1;
    product.prod_price = parseInt(this.prod_price);
    product.prod_state = "Correcto";
    product.prod_totalPay = product.prod_price;
    product.prod_state = "Correcto";
    product.prod_image = "http://placehold.it/100x100";
    product.prod_currency = "PEN";

    // this.product.prod_amount = 1;
    // this.product.prod_price = parseInt(this.purch_price);
    // this.product.prod_state = "Correcto";
    // this.product.prod_totalPay = this.product.prod_price;
    // this.product.prod_state = "Correcto";
    // this.product.prod_image = "http://placehold.it/100x100";
    
    this.products.push(product);
    this.purchase.prod_details = this.products;
    this.user.purchase = this.purchase;
    console.log("[AddToCartComponent|registrarproduct] user:");
    console.log(this.user);

    // console.log("[AddToCartComponent|registrarproduct] purchase:");
    // console.log(this.purchase);
    
    // this.purchases.push(this.purchase);
    // console.log("[AddToCartComponent|registrarproduct] purchases:");
    // console.log(this.purchases);

    // this.user.purchase.prod_details = this.products;

    localStorage.setItem("User",JSON.stringify(this.user));
    // console.log("[AddToCartComponent|registrarProducto] products:");
    // console.log(this.products);
    // this._data.enviarProductos(this.product);
  }
}
