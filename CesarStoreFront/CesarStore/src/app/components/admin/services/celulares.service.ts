import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Celular } from '../interface/celular.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularesService {

  API_URI = 'http://localhost:4002';
constructor( private http: HttpClient) {}

getCelulares() {
  return this.http.get(`${this.API_URI}/fprobycat/1`);
}

getCelular( id: string) {
return this.http.get(`${this.API_URI}/findpro/${id}`);

}
borrarCelular(id: string) {
return this.http.delete(`${this.API_URI}/findpro/${id}`);
}

nuevoCelular(celular: Celular) {
  return this.http.post(`${this.API_URI}/addpro`, celular);
}
/* editarCelular( id: string, editarCelular: Celular): Observable<Celular> {
  return this.http.put(`${this.API_URI}/findpro/${id}`, editarCelular);
 } */
}


