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

  // changeMessage(message:string){
  //   this.messageSource.next(message);
  // }

  enviarProductos(producto:Product){
    this.product.next(producto);
    console.log("[dataService|enviarProductos] producto:");
    console.log(producto);
  }

  obtenerUsuario(id):Observable<any>{
    return this._http.get('http://localhost:3000/user/'+id);
  }

  registrarUsuario(user:User):Observable<any>{
    return this._http.post('http://localhost:3000/user',user)
  }

  // registrarCompra(purchase:Purchase):Observable<any>{
  registrarCompra(id:string, purchase:Purchase):Observable<any>{
    console.log("DataService|registrarCompra|id, purchase");
    console.log(id, purchase);
    let data = {
      purchase,
      id
    }
    return this._http.post('http://localhost:3000/user',data);
  }
}
