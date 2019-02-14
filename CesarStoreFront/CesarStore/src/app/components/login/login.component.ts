import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload} from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials:TokenPayload = {
    user_username:'',
    user_pass: ''
  };
  public message:string;
  public user:User = new User();
  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  ingresar(){
    // console.log("login|ingresar|credentials");
    // console.log(this.credentials);

    this.auth.login(this.credentials).subscribe((token) => {
      if(token){
        let user = this.auth.getUserDetails();
        this.user.user_id = user._id;
        this.user.user_username = user.user_username;
        if(localStorage.getItem('User')){
          let user = JSON.parse(localStorage.getItem('User'));
          this.user.purchase = user.purchase;
        }
  
        localStorage.setItem('User',JSON.stringify(this.user));
        this.router.navigateByUrl('/home');
      }
    }, (err) => {
      if(err.message){
        this.message = "Usuario no registrado, registrese primero por favor";
      }
    }); 
  }
}
