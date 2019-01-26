import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';
import { DataService } from 'src/app/services/data.service';1

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.sass']
})
export class AddToCartComponent implements OnInit {
  public purchase:Purchase = new Purchase();
  public product:Product = new Product();
  public products:Array<Product> = new Array<Product>();
  public prod_name:string = '';
  public prod_price:string;
  public user:User = new User();
  constructor() {
    if(localStorage.getItem("User")){
      this.user = JSON.parse(localStorage.getItem("User"));
      if(this.user.purchase != null){
        this.products = this.user.purchase.prod_details;
      }
      this.products = new Array<Product>();
      // });
    }else{
      // this._dataService.obtenerUsuario()
      this.user.user_role = 3;
      this.user.user_name = "Invitado";
      this.purchase.prod_details = this.products;
      this.user.purchase = this.purchase;
      
      localStorage.setItem("User",JSON.stringify(this.user));
    }
    // this.amount = this.products.length;
    console.log("[AddToCartComponent|constructor] user:");
    console.log(this.user);
    console.log("[AddToCartComponent|constructor] products:");
    console.log(this.products);
  }
  
  ngOnInit() {
  }
  
  registrarProducto(){
    
    let product = new Product();
    this.purchase.purchase_date = new Date();
    product.prod_name = this.prod_name;
    product.prod_currency = "PEN";
    product.prod_amount = 1;
    product.prod_price = parseInt(this.prod_price);
    product.prod_state = "Correcto";
    product.prod_totalPay = product.prod_price;
    product.prod_state = "Correcto";
    product.prod_image = "http://placehold.it/100x100";
    product.prod_currency = "PEN";
    
    this.products.push(product);
    this.purchase.prod_details = this.products;
    this.user.purchase = this.purchase;
    console.log("[AddToCartComponent|registrarproduct] user:");
    console.log(this.user);

    localStorage.setItem("User",JSON.stringify(this.user));
  }
}
