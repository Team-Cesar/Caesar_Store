import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Purchase } from 'src/app/models/Purchase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    user_username: '',
    user_name: '',
    user_lastname: '',
    user_email: '',
    user_pass: '',
    pass_conf: '',
  };
  public mensaje: string;
  // public credentials:User = new User();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registrar() {
    // console.log("[register] credentials:");
    // console.log(this.credentials);

    if (this.credentials.user_pass === this.credentials.pass_conf) {
      // let user:User = new User();
      // user.user_name = this.credentials.user_name;
      // user.user_lastname = this.credentials.user_lastname;
      // user.user_email = this.credentials.user_email;
      // user.user_role = 1;
      // user.purchase = new Purchase();

      console.log("[register] credentials:");
      console.log(this.credentials);

      this.auth.register(this.credentials).subscribe((response) => {
        console.log("register|registrar|auth|response:");
        console.log(response);
        this.router.navigateByUrl('/login');
      }, (err) => {
        console.log("Error en el registro: Usuario registrado");
        console.error(err);
      });
    } else {
      this.mensaje = "Las contraseñas no coinciden";
    }
  }
}
