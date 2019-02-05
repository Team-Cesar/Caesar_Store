import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';
import { Purchase } from '../models/Purchase';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private messageSource = new BehaviorSubject<string>("Mensaje de prueba");
  private product = new Subject<Product>();
  currentProduct = this.product.asObservable();
  // private producto:Product = new Observable<Product>();
  // currentMessage = this.messageSource.asObservable();
  // propertyProductos = this.productos.

  constructor(private _http:HttpClient) { }

  obtenerUsuario(id):Observable<any>{
    return this._http.get('http://localhost:3000/get-user/'+id);
  }

  // registrarCompra(user_username:string, purchase:Purchase):void{
  registrarCompra(user_username:string, purchase:Purchase):Observable<any>{
    console.log("DataService|registrarCompra|id, purchase");
    console.log(user_username, purchase);
    let data = {
      purchase,
      user_username
    }
    return this._http.post('https://user-purchases-api.herokuapp.com/push-purchase',data);
  }
}
