import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.sass']
})
export class ShopListComponent implements OnInit {
  public product:Product = new Product();
  // public images:Array<object> = new Array<object>();
  constructor() {
    this.product.prod_name = "producto1";
    this.product.prod_brand = "Motorola";
    this.product.prod_code = "MT-10";
    this.product.prod_price = 202.2;
    this.product.prod_desc = "Producto de primera calidada";
    this.product.prod_discount = 20.2;
    this.product.prod_status = "Buenas condiciones";
    this.product.prod_stock = 200;
    this.product.image_list[0].image_name = "Vista numero 1";
    this.product.image_list[0].image_url = "https://i.gadgets360cdn.com/products/large/1534396088_635_moto_p30.jpg";

   }

  ngOnInit() {
  }

}
