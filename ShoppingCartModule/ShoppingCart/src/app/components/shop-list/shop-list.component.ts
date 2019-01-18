import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';
import { Image } from 'src/app/models/Image';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Purchase } from 'src/app/models/Purchase';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass']
})
export class ShopListComponent implements OnInit {
  public shopping_cart:Array<Purchase> = new Array<Purchase>();
  public user:User = new User();
  public cantidadTotal:number;
  public totalAPagar:number = 0;
  public cantidadAComprar:number = 0;
  // public compra:number;
  constructor(){
    if(localStorage.getItem("User")){
      this.user = JSON.parse(localStorage.getItem("User"));
    }else{
      this.user.user_role = 3;
      this.user.user_name = "Invitado";
      this.user.purchases_list = new Array<Purchase>();
    }
    this.shopping_cart = this.user.purchases_list;
    console.log("[ShopListComponent|constructor] user:");
    console.log(this.user);
    console.log("[ShopListComponent|constructor] shopping_cart:");
    console.log(this.shopping_cart);
    if(this.shopping_cart.length !==0){
      this.shopping_cart.forEach((purchase)=>{
        this.totalAPagar = this.totalAPagar + purchase.purch_totalPay;
      });
      this.cantidadAComprar = this.shopping_cart.length;
    }else{
      this.totalAPagar = 0;
      this.cantidadAComprar = 0;
    }
  }

  ngOnInit(){

  }

  operation(i:number, value:boolean){
    if(value){
      this.shopping_cart[i].purch_amount++;
    }else{
      this.shopping_cart[i].purch_amount--;
      if(this.shopping_cart[i].purch_amount<0){
        this.shopping_cart[i].purch_amount=0;
      }
    }
    this.procesar(i);
  }

  procesar(index:number){
    this.totalAPagar = 0;
    this.cantidadAComprar = 0;
    this.shopping_cart.forEach((purchase, i)=>{
      if(index === i){
        purchase.purch_totalPay = purchase.purch_amount * purchase.purch_price;
        purchase.purch_totalPay = Math.round(purchase.purch_totalPay * 100) / 100;
      }
      this.totalAPagar = this.totalAPagar + purchase.purch_totalPay;
      this.totalAPagar = Math.round(this.totalAPagar * 100) / 100;
      this.cantidadAComprar = this.cantidadAComprar + purchase.purch_amount;
      this.cantidadAComprar = Math.round(this.cantidadAComprar * 100) / 100;
    });

    console.log("[ShopListComponent|operation] totalAPagar");
    console.log(this.totalAPagar);
    
    // this.totalAPagar = preciosFinales.reduce(function(a, b){ return a + b; });
    this.user.purchases_list = this.shopping_cart;
    console.log("[ShopListComponent|operation] this.user.purchase_list");
    console.log(this.user.purchases_list);

    localStorage.setItem("User",JSON.stringify(this.user));
  }
  
  eliminar(index:number){
    this.shopping_cart = this.shopping_cart.filter((purchase, i)=>{
      if(index !== i){
        return purchase;
      }
    });
    this.user.purchases_list = this.shopping_cart;
    localStorage.setItem("User",JSON.stringify(this.user));
    // this.procesar(index);
  }
}
