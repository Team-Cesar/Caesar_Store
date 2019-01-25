import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';
import { Purchase } from '../models/Purchase';
import { HttpClient } from '@angular/common/http';

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
    console.log("[dataService|enviarProductos] producto:")
    console.log(producto);
  }

  // registrarCompra(purchase:Purchase):Observable<any>{
  registrarCompra(username:string, purchases:Array<Purchase>):void{
    console.log("DataService|registrarCompra|id, purchases");
    console.log(username, purchases);
    // return this._http.post('http://localhost:3000/putPurchases',purchase);
  }
}
