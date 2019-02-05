import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService, TokenPayload } from 'src/app/services/auth.service';
import { Purchase } from 'src/app/models/Purchase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  public credentials:TokenPayload = {
    user_username:'',
    // user_email: '',
    user_pass: ''
  };
  public message:string;

  public user:User = new User();
  public isLogged:Boolean;

  constructor(public _auth:AuthService) {
    this.isLogged = this._auth.isLoggedIn();
    if(this.isLogged){
      this.user = JSON.parse(localStorage.getItem('User'));
    }else{
      this.user.purchase = new Purchase();
      localStorage.setItem('User',JSON.stringify(this.user));
      // console.log("headerComponent|constructor|User");
      // console.log(this.user);
    }
    const details = JSON.stringify(this._auth.getUserDetails);
    // const log = this._auth.isLoggedIn;
    // console.log("headerComponent|constructor|getUserDetails");
    // console.log(details);
      
    // console.log("headerComponent|constructor|isLoggedIn");
    // console.log(log);
  }

  // metodos
  logout(){
    this._auth.logout();
    this.isLogged = false;
    let user = new User();
    user.user_username = "";
    user.purchase = new Purchase();
    localStorage.removeItem('User');
    localStorage.setItem('User',JSON.stringify(user));
  }

  asignarCompra(){

  }
}
