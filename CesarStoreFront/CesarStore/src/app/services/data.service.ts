import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/Product';
import { Purchase } from '../models/Purchase';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { ProductPublic } from '../models/Public/ProductPublic';
import { ImageProductPublic } from '../models/Public/ImageProductPublic';

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

  constructor(private _http: HttpClient) { }

  obtenerUsuario(id): Observable<any> {
    return this._http.get('http://localhost:3000/get-user/' + id);
  }

  // registrarCompra(user_username:string, purchase:Purchase):void{
  registrarCompra(user_username: string, purchase: Purchase): Observable<any> {
    console.log("DataService|registrarCompra|id, purchase");
    console.log(user_username, purchase);
    let data = {
      purchase,
      user_username
    }
    return this._http.post('https://user-purchases-api.herokuapp.com/push-purchase', data);
  }

  obtenerProductos(cat_id: number): Observable<any> {
    return this._http.get('localhost:4000/fprobycat/'+cat_id);
  }
}




// if (cat_name == 'camaras') {
  //   let img: ImageProductPublic = {
  //     img_id: 1,
  //     image_nam: 'Vista frontal',
  //     image_url: 'http://placehold.it/200x200',
  //   }
  //   let img2: ImageProductPublic = {
  //     img_id: 2,
  //     image_nam: 'Vista frontal',
  //     image_url: 'http://placehold.it/200x200',
  //   }
  //   let img3: ImageProductPublic = {
  //     img_id: 3,
  //     image_nam: 'Vista frontal',
  //     image_url: 'http://placehold.it/200x200',
  //   }
  //   let img4: ImageProductPublic = {
  //     img_id: 4,
  //     image_nam: 'Vista frontal',
  //     image_url: 'http://placehold.it/200x200',
  //   }

  //   let cam1: ProductPublic = {
  //     prod_id: 1,
  //     prod_nam: 'Canon 5000',
  //     prod_des: 'Camara para fotografos apasionados',
  //     prod_bra: 'Canon',
  //     prod_pri: 450.0,
  //     prod_sto: 2,
  //     prod_cat: 'Camara',
  //     prod_sta: 'Correcto',
  //     image_list: [img, img2, img3, img4]
  //   }
  //   let cam2: ProductPublic = {
  //     prod_id: 2,
  //     prod_nam: 'Canon 5000',
  //     prod_des: 'Camara para fotografos apasionados',
  //     prod_bra: 'Canon',
  //     prod_pri: 450.0,
  //     prod_sto: 2,
  //     prod_cat: 'Camara',
  //     prod_sta: 'Correcto',
  //     image_list: [img, img2, img3, img4]
  //   }
  //   let cam3: ProductPublic = {
  //     prod_id: 3,
  //     prod_nam: 'Canon 5000',
  //     prod_des: 'Camara para fotografos apasionados',
  //     prod_bra: 'Canon',
  //     prod_pri: 450.0,
  //     prod_sto: 2,
  //     prod_cat: 'Camara',
  //     prod_sta: 'Correcto',
  //     image_list: [img, img2, img3, img4]
  //   }
  //   let cam4: ProductPublic = {
  //     prod_id: 4,
  //     prod_nam: 'Canon 5000',
  //     prod_des: 'Camara para fotografos apasionados',
  //     prod_bra: 'Canon',
  //     prod_pri: 450.0,
  //     prod_sto: 2,
  //     prod_cat: 'Camara',
  //     prod_sta: 'Correcto',
  //     image_list: [img, img2, img3, img4]
  //   }
  //   let cam5: ProductPublic = {
  //     prod_id: 5,
  //     prod_nam: 'Canon 5000',
  //     prod_des: 'Camara para fotografos apasionados',
  //     prod_bra: 'Canon',
  //     prod_pri: 450.0,
  //     prod_sto: 2,
  //     prod_cat: 'Camara',
  //     prod_sta: 'Correcto',
  //     image_list: [img, img2, img3, img4]
  //   }
  //   let cam6: ProductPublic = {
  //     prod_id: 6,
  //     prod_nam: 'Canon 5000',
  //     prod_des: 'Camara para fotografos apasionados',
  //     prod_bra: 'Canon',
  //     prod_pri: 450.0,
  //     prod_sto: 2,
  //     prod_cat: 'Camara',
  //     prod_sta: 'Correcto',
  //     image_list: [img, img2, img3, img4]
  //   }
  //   let camaras: ProductPublic[] = [cam1, cam2, cam3, cam4, cam5, cam6];
  //   return camaras;
  // }