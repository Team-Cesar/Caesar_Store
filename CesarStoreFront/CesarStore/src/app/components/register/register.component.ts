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
  public email_1:string = ''; 
  public email_2:string = '';
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
    this.credentials.user_email = this.email_1+'@'+this.email_2;

    if (this.credentials.user_pass !== this.credentials.pass_conf) this.mensaje = "Las contraseñas no coinciden";
    if(this.credentials.user_pass.length < 6) this.mensaje = "La contraseña tiene longitud menor a 6 digitos";
    else{
      console.log("[register] credentials:");
      console.log(this.credentials);

      this.auth.register(this.credentials).subscribe((response) => {
        console.log("register|registrar|auth|response:");
        console.log(response);
        this.router.navigateByUrl('/login');
      }, (err) => {
        this.mensaje = "Username ya usado"; 
        console.log("Error en el registro: Usuario registrado");
        console.error(err);
      });
    }
  }
}
