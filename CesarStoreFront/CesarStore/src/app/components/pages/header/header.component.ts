import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService, TokenPayload } from 'src/app/services/auth.service';
import { Purchase } from 'src/app/models/Purchase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  @Input() usuario:string;
  public credentials:TokenPayload = {
    user_username:'',
    // user_email: '',
    user_pass: ''
  };
  public message:string;
  public userProfile:any = '';
  public user:User = new User();
  public isLogged:Boolean;

  constructor(public _auth:AuthService) {
    this.isLogged = this._auth.isLoggedIn();
    if(this.isLogged){
      this.user = JSON.parse(localStorage.getItem('User'));
    }else{
      this.user.purchase = new Purchase();
      localStorage.setItem('User',JSON.stringify(this.user));
    }
  }

  // metodos
  logout(){
    this._auth.logout();
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
    if(this._auth.isLoggedIn()){
      this.userProfile = this._auth.getUserDetails();
      // console.log('headerComponent|')
    }
  }
}
