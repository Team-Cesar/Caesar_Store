import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Purchase } from 'src/app/models/Purchase';
Purchase

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  public user:User = new User();
  public email:string;
  constructor(public _auth:AuthService) {
    if(localStorage.getItem('User')){
      this.user = JSON.parse(localStorage.getItem('User'));
      this.email = this.user.user_email;
    }else{
      this.user.user_role = 3;
      this.user.user_email = "Invitado";
      this.user.purchase = new Purchase();
    }
  }

  // metodos
  logout(){
    this._auth.logout();
    this.user.user_role = 3;
    this.user.user_email = "Invitado";
    this.user.purchase = new Purchase();
    localStorage.removeItem('User');
    localStorage.setItem('User',JSON.stringify(this.user));
  }
}
