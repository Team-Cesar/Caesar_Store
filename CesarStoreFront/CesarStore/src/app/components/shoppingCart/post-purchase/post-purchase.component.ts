import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Send } from 'src/app/models/Send';
import { Product } from 'src/app/models/Product';
import { Purchase } from 'src/app/models/Purchase';

@Component({
  selector: 'app-post-purchase',
  templateUrl: './post-purchase.component.html',
  styleUrls: ['./post-purchase.component.sass']
})
export class PostPurchaseComponent implements OnInit {
  // propiedades de clase
  public user:User = new User();
  public date:Date;
  public send:Send = new Send();
  public product:Product = new Product();
  public products:Array<Product> = new Array<Product>();

  constructor() {
    this.user = JSON.parse(localStorage.getItem("User"));
    this.send = this.user.purchase.send_details;
    this.products = this.user.purchase.prod_details;
    this.date = this.user.purchase.purchase_date;
   }

  ngOnInit() {
  }

}
