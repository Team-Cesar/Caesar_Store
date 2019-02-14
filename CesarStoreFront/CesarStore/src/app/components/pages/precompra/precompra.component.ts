import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';
import { ProductPublic } from 'src/app/models/Public/ProductPublic';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ImageProductPublic } from 'src/app/models/Public/ImageProductPublic';

@Component({
  selector: 'app-precompra',
  templateUrl: './precompra.component.html',
  styleUrls: ['./precompra.component.css']
})
export class PrecompraComponent implements OnInit {
  public purchase:Purchase = new Purchase();
  public product:Product = new Product();
  public productPublic:ProductPublic = new ProductPublic();
  public products:Product[] = new Array<Product>();
  public imagenes:Array<ImageProductPublic> = new Array<ImageProductPublic>();
  public user:User = new User();

  constructor(private _router:Router, private _data:DataService) {
  }
  
  ngOnInit() {
    if(localStorage.getItem('product')){
      this.productPublic = JSON.parse(localStorage.getItem('product'));
      this._data.obtenerImagenesDeProducto(this.productPublic.pro_id).subscribe((imagenes)=>{
        this.imagenes = imagenes;
      });
    }
    if(localStorage.getItem('User')){
      this.user = JSON.parse(localStorage.getItem('User'));
      if(this.user.purchase.prod_details){
        this.products = this.user.purchase.prod_details;
      }else{
        this.products = new Array<Product>();
      }
    }
  }
  
  registrarProducto(){
    if(localStorage.getItem('User')){
      this.product.prod_name = this.productPublic.pro_nam;
      this.product.prod_currency = "PEN";
      this.product.prod_amount = 1;
      this.product.prod_price = this.productPublic.pro_pri;
      this.product.prod_state = this.productPublic.pro_sta;
      this.product.prod_totalPay = this.productPublic.pro_pri;
      this.product.prod_image = this.imagenes[0].img_url;
      
      this.products.push(this.product);
      this.user.purchase.prod_details = this.products;
      this.user.purchase.purchase_date = new Date();
    }

    localStorage.setItem("User",JSON.stringify(this.user));
  }
}
