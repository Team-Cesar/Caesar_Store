import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';
import { ProductPublic } from 'src/app/models/Public/ProductPublic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precompra',
  templateUrl: './precompra.component.html',
  styleUrls: ['./precompra.component.css']
})
export class PrecompraComponent implements OnInit {
  public purchase:Purchase = new Purchase();
  public product:Product = new Product();
  public productPublic:ProductPublic = new ProductPublic();
  public products:Array<Product> = new Array<Product>();
  public prod_name:string = '';
  public prod_price:string;
  public user:User = new User();

  constructor(private _router:Router) {
  }
  
  ngOnInit() {
    if(localStorage.getItem('product')){
      this.productPublic = JSON.parse(localStorage.getItem('product'));
    }
    if(localStorage.getItem('User')){
      this.user = JSON.parse(localStorage.getItem('User'));
    }
  }
  
  registrarProducto(){
    
    let product = new Product();
    this.purchase.purchase_date = new Date();
    product.prod_name = this.productPublic.prod_nam;
    product.prod_currency = "PEN";
    product.prod_amount = 1;
    product.prod_price = this.productPublic.prod_pri;
    product.prod_state = this.productPublic.prod_sta;
    product.prod_totalPay = this.productPublic.prod_pri;
    product.prod_image = this.productPublic.image_list[0].image_url;
    
    this.products.push(product);
    this.purchase.prod_details = this.products;
    this.user.purchase = this.purchase;
    console.log("[AddToCartComponent|registrarproduct] user:");
    console.log(this.user);

    localStorage.setItem("User",JSON.stringify(this.user));
    this._router.navigateByUrl('/shop-list');
  }
}
