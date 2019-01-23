import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';


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

  constructor() { }

  // changeMessage(message:string){
  //   this.messageSource.next(message);
  // }

  enviarProductos(producto:Product){
    this.product.next(producto);
    console.log("[dataService|enviarProductos] producto:")
    console.log(producto);
  }
}
