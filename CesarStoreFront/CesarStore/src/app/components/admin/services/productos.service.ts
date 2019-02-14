 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:4000';
constructor( private http: HttpClient) {}

getProductos( id: string) {
  return this.http.get(`${this.API_URI}/fprobycat/${id}`);
}

getProducto( id: string) {
return this.http.get(`${this.API_URI}/findpro/${id}`);
}
getMarcas() {
  return this.http.get(`${this.API_URI}/findallbra`);
  }
getCategorias() {
    return this.http.get(`${this.API_URI}/findallcat`);
    }


borrarProducto(id: string) {
return this.http.delete(`${this.API_URI}/delpro/${id}`);
}
borrarCategoria(id: string) {
  return this.http.get(`${this.API_URI}/delcat/${id}`);
  }
borrarMarca(id: string) {
    return this.http.get(`${this.API_URI}/delbra/${id}`);
    }

saveProducto(producto: Producto) {
  return this.http.post(`${this.API_URI}/addpro`, producto);
}
saveCategoria(categoria: Categoria) {
  return this.http.post(`${this.API_URI}/addcat`, categoria);
}


updateProducto(  productoActualizado , id: any): Observable<Producto> {
  return this.http.post(`${this.API_URI}/editpro/${id}`, productoActualizado);
 }

}


