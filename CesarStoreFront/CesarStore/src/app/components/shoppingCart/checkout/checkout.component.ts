import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/models/Purchase';
import { Send } from 'src/app/models/Send';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  public user:User = new User();
  public purchase:Purchase = new Purchase();
  // public purchases:Array<Purchase> = new Array<Purchase>();
  public products:Array<Product> = new Array<Product>();
  public send:Send = new Send();

  public payPalConfig?: PayPalConfig;
  public mensaje:string;
  
  constructor(private _router:Router,
              private _data:DataService) {

    if(localStorage.getItem("User")){
      this.user = JSON.parse(localStorage.getItem("User"));
      this.products = this.user.purchase.prod_details;
    }else{
      this._router.navigateByUrl("shop-list");
    }
    console.log("[CheckOutComponent|Constructor] User:");
    console.log(this.user);
  }

  ngOnInit() {
    // this.initConfig();
  }

  enviar(){
    // this._data.changeMessage(this.mensaje);
  }

  // private initConfig(): void {
  //   this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
  //     commit: true,
  //     client: {
  //       sandbox: 'AcKwWTLdsWXhSTdykxMhx8nsVsxh98DF6sBmFSyPXuIDsvno4ml6sjbiVLB2HMVtbftHWTDhf6OpMTeM',
  //     },
  //     button: {
  //       label: 'paypal',
  //       layout: 'vertical'
  //     },
  //     onPaymentComplete: (data, actions) => {
  //       console.log('OnPaymentComplete');
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel');
  //     },
  //     onError: (err) => {
  //       console.log('OnError');
  //     },
  //     onClick: () => {
  //       console.log('onClick');
  //       // this.comprar();
  //     },
  //     validate: (actions) => {
  //       console.log(actions);
  //     },
  //     experience: {
  //       noShipping: true,
  //       brandName: 'Caesar Store'
  //     },
  //     transactions: [{
  //       // amount: {
  //       //   currency: 'USD',
  //       //   total: 9
  //       // }
  //       amount: {
  //         total: this.purchases[0].prod_details.purch_totalPay,
  //         currency: this.purchases[0].prod_details.purch_currency,
  //         details: {
  //           subtotal: this.purchases[0].prod_details.purch_totalPay,
  //           tax: 0.0,
  //           shipping: 0.00,
  //           handling_fee: 0.00,
  //           shipping_discount: 0.00,
  //           insurance: 0.00
  //         }
  //       },
  //       custom: 'Custom value',
  //       item_list: {
  //         items: [
  //           {
  //             name: this.purchases[0].prod_details.purch_prod,
  //             description: '',
  //             quantity: this.purchases[0].prod_details.purch_amount,
  //             price: this.purchases[0].prod_details.purch_price,
  //             tax: 0.00,
  //             sku: '1',
  //             currency: this.purchases[0].prod_details.purch_currency
  //           },
  //           {
  //             name: this.purchases[1].prod_details.purch_prod,
  //             description: '',
  //             quantity: this.purchases[1].prod_details.purch_amount,
  //             price: this.purchases[1].prod_details.purch_price,
  //             tax: 0.0,
  //             sku: '1',
  //             currency: this.purchases[1].prod_details.purch_currency
  //           }],
  //         shipping_address: {
  //           recipient_name: this.user.user_name+' '+this.user.user_lastname,
  //           line1: this.send.send_street,
  //           line2: '',
  //           city: this.send.send_city,
  //           country_code: this.send.send_country,
  //           postal_code: this.send.send_zip,
  //           phone: this.send.send_phone,
  //           state: this.send.send_state
  //         },
  //       }
  //     }],
  //     note_to_payer: 'Contact us if you have troubles processing payment'
  //   });
  // }

  comprar(){
    // this.initConfig();
    console.log("CheckOutComponent|comprar|send");
    console.log(this.send);
    // this.purchase.send_details = this.send;
    this.user.purchase.send_details = this.send;
    localStorage.setItem("User",JSON.stringify(this.user));
    // this._data.registrarCompra(this.user.user_name,this.purchases);
    console.log("CheckOutComponent|comprar|user");
    console.log(this.user);

    this._data.registrarCompra(this.user.user_username, this.user.purchase).subscribe((response)=>{
      console.log("checkOutComponent|comprar|registrarCompra|response");
      console.log(response);
      // this._router.navigateByUrl('/thanks');
    });
  }
}
