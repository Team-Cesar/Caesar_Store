import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Checkout } from 'src/app/models/Checkout';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  public credential:Checkout = new Checkout();

  public mensaje:string;
  constructor(private _data:DataService) { }

  ngOnInit() {
  }

  enviar(){
    // this._data.changeMessage(this.mensaje);
  }

}
