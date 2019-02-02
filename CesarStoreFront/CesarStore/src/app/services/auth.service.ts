import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { Purchase } from '../models/Purchase';


// interfaces 
export interface UserDetails{
  _id:string;
  user_username:string;
  user_name:string;
  user_lastname:string;
  user_email:string;
  user_role:number;
  exp:number;
  iat:number
}

export interface TokenPayload{
  user_username:string;
  user_name?:string;
  user_lastname?:string;
  user_email?:string;
  user_pass:String;
  pass_conf?:String;
}

interface TokenResponse{
  token:string;
}

@Injectable()
export class AuthService {
  private token:string;
  public user:User = new User();
  
  constructor(private http:HttpClient, private router:Router) { }

  // metodos
  private saveToken(token:string):void{
    localStorage.setItem('token',token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      console.log("authService|getUserDetails|payload");
      console.log(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public testUsername(username:string):Observable<any>{
    return this.http.post('http://localhost:3000/testUsername',{username});
    // return this.http.post(this.uri+'api/testUsername',{username});
  }

  private request(method: 'post'|'get', type: 'register'|'login'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (type === 'register'){
      // base = this._http.post(`/api/${type}`, user);
      // base = this.http.post(`${this.uri}api/${type}`,user);
      base = this.http.post('http://localhost:3000/user', user);
    }else if(type === 'login'){
      base = this.http.post('http://localhost:3000/login', user);
    }else{
      base = this.http.get('http://localhost:3000/profile');
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public logout(): void {
    this.token = '';
    localStorage.removeItem('token');
    
  }
}
