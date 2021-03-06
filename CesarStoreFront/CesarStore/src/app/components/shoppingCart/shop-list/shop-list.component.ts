import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/Purchase';
import { User } from 'src/app/models/User';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass']
})
export class ShopListComponent implements OnInit {
  public user:User = new User();
  public purchase:Purchase = new Purchase();
  public purchases = new Array<Purchase>();
  // public purchases:Array<Purchase> = new Array<Purchase>();
  public products:Array<Product>;
  public totalAPagar:number = 0.0;
  public cantidadAComprar:number = 0;

  constructor(private _dataService:DataService, private _auth:AuthService){
    if(localStorage.getItem('User')){
      this.user = JSON.parse(localStorage.getItem('User'));
      this.products = this.user.purchase.prod_details;
    }

    if(this.products != null){
      this.products.forEach((product)=>{
        this.totalAPagar = this.totalAPagar + product.prod_price;
      });
      this.cantidadAComprar = this.products.length;
    }
    // console.log("[ShopListComponent|constructor] user:");
    // console.log(this.user);
    console.log("[ShopListComponent|constructor] products:");
    console.log(this.products);
  }

  ngOnInit(){

  }

  operation(i:number, value:boolean){
    if(value){
      this.products[i].prod_amount++;
    }else{
      this.products[i].prod_amount--;
      if(this.products[i].prod_amount<0){
        this.products[i].prod_amount=0;
      }
    }
    this.procesar(i);
  }

  procesar(index:number){
    this.totalAPagar = 0;
    this.cantidadAComprar = 0;
    this.products.forEach((product, i)=>{
      if(index === i){
        product.prod_totalPay = product.prod_amount * product.prod_price;
        product.prod_totalPay = Math.round(product.prod_totalPay * 100) / 100;
      }
      this.totalAPagar = this.totalAPagar + product.prod_totalPay;
      this.totalAPagar = Math.round(this.totalAPagar * 100) / 100;
      this.cantidadAComprar =  this.cantidadAComprar + product.prod_amount;
      this.cantidadAComprar = Math.round(this.cantidadAComprar * 100) / 100;
    });

    console.log("[ShopListComponent|operation] totalAPagar");
    console.log(this.totalAPagar);
    
    // this.totalAPagar = preciosFinales.reduce(function(a, b){ return a + b; });
    this.user.purchase.prod_details = this.products;
    console.log("[ShopListComponent|operation] this.products");
    console.log(this.user.purchase.prod_details);

    localStorage.setItem("User",JSON.stringify(this.user));
  }
  
  eliminar(index:number){
    this.products = this.products.filter((product, i)=>{
      if(index !== i){
        return product;
      }
    });
    this.user.purchase.prod_details = this.products;
    localStorage.setItem("User",JSON.stringify(this.user));
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.prod_name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
