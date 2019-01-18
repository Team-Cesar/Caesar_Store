import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  public mensaje:string;
  constructor(private _data:DataService) { }

  ngOnInit() {
  }

  enviar(){
    // this._data.changeMessage(this.mensaje);
  }

}
