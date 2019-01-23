import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Checkout } from 'src/app/models/Checkout';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  public payPalConfig?: PayPalConfig;

  public credential:Checkout = new Checkout();

  public mensaje:string;
  public user:User;
  constructor(private _data:DataService) { 
    this.user = JSON.parse(localStorage.getItem("User"));
    this.user.user_name = "Daniele";
    console.log("user name:");
    console.log(this.user.user_name);
  }

  ngOnInit() {
    this.initConfig();
  }

  enviar(){
    // this._data.changeMessage(this.mensaje);
  }

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AcKwWTLdsWXhSTdykxMhx8nsVsxh98DF6sBmFSyPXuIDsvno4ml6sjbiVLB2HMVtbftHWTDhf6OpMTeM',
      },
      button: {
        label: 'paypal',
        layout: 'vertical'
      },
      onPaymentComplete: (data, actions) => {
        console.log('OnPaymentComplete');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError');
      },
      onClick: () => {
        console.log('onClick');
      },
      validate: (actions) => {
        console.log(actions);
      },
      experience: {
        noShipping: true,
        brandName: 'Angular PayPal'
      },
      transactions: [{
        // amount: {
        //   currency: 'USD',
        //   total: 9
        // }
        amount: {
          total: 30.11,
          currency: 'USD',
          details: {
            subtotal: 30.00,
            tax: 0.0,
            shipping: 0.00,
            handling_fee: 1.00,
            shipping_discount: -1.00,
            insurance: 0.01
          }
        },
        custom: 'Custom value',
        item_list: {
          items: [
            {
              name: 'hat',
              description: 'Brown hat.',
              quantity: 5,
              price: 3,
              tax: 0.01,
              sku: '1',
              currency: 'USD'
            },
            {
              name: 'handbag',
              description: 'Black handbag.',
              quantity: 1,
              price: 15,
              tax: 0.02,
              sku: 'product34',
              currency: 'USD'
            }],
          shipping_address: {
            recipient_name: 'Brian Robinson',
            line1: '4th Floor',
            line2: 'Unit #34',
            city: 'San Jose',
            country_code: 'US',
            postal_code: '95131',
            phone: '011862212345678',
            state: 'CA'
          },
        }
      }],
      note_to_payer: 'Contact us if you have troubles processing payment'
    });
  }

}
