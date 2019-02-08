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
    // user_email: '',
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

    this.auth.login(this.credentials).subscribe((response) => {
      // console.log("loginComponent|login|response");
      // console.log(response);
      let user = this.auth.getUserDetails();
      // console.log("loginComponent|login|getUserDetails");
      // console.log(user);
      this.user.user_id = user._id;
      this.user.user_username = user.user_username;
      // this.user.user_name = user.user_name;
      // this.user.user_email = user.user_email;
      // this.user.user_lastname = user.user_lastname;
      // this.user.user_role = user.user_role;
      this.user.purchase = new Purchase();

      localStorage.setItem('User',JSON.stringify(this.user));
      this.router.navigateByUrl('/home');
    }, (err) => {
      if(err.message){
        this.message = "Usuario no registrado, registrese primero por favor";
      }
      // this.isLog = 'no';
      // console.error("[login] Error]");
      // console.error(err);
    }); 
  }
}
