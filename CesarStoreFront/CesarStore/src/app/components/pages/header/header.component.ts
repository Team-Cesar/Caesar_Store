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
  public message:string;
  public userProfile:any = '';
  public user:User = new User();
  public isLogged:Boolean;

  constructor(public auth:AuthService) {
    if(!localStorage.getItem('User')){
      this.user.purchase = new Purchase();
      localStorage.setItem('User',JSON.stringify(this.user));
    }
    this.user = JSON.parse(localStorage.getItem('User'));
    if(this.auth.isLoggedIn()){
      this.userProfile = this.auth.getUserDetails()
    }
  }

  // metodos
  logout(){
    this.auth.logout();
    this.isLogged = false;
    let user = new User();
    user.user_username = "";
    this.userProfile = '';
    user.purchase = new Purchase();
    localStorage.removeItem('User');
    localStorage.setItem('User',JSON.stringify(user));
  }

  asignarCompra(){

  }

  DetallesUsuario(){
    if(this.auth.isLoggedIn()){
      this.userProfile = this.auth.getUserDetails();
    }
  }
}
