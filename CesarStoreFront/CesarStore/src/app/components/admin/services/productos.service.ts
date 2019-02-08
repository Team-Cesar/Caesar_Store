 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:4000';
constructor( private http: HttpClient) {}

getProductos( id: number) {
  return this.http.get(`${this.API_URI}/fprobycat/${id}`);
}

getProducto( id: string) {
return this.http.get(`${this.API_URI}/findpro/${id}`);
}

borrarProducto(id: string) {
return this.http.delete(`${this.API_URI}/delpro/${id}`);
}

saveProducto(celular: Producto) {
  return this.http.post(`${this.API_URI}/addpro`, celular);
}

updateProducto( id: any, editarProducto: Producto): Observable<Producto> {
  return this.http.put(`${this.API_URI}/findpro/${id}`, editarProducto);
 }

 actualizarCelular( celular: Producto, id: string) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  };
  // https://angular.io/guide/http#making-a-post-request
  return this.http.put<Producto>(`${this.API_URI}/findpro/${id}` , celular , httpOptions )
        .pipe(
        map( res => {
          console.log(res.pro_nam);
          return res;
        }));
}

}


