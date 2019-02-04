import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Celular } from '../interface/celular.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CelularesService {

// tslint:disable-next-line:quotemark
celularesUrl: string = "https://celularesapp-dd67e.firebaseio.com/celulares.json";
celularUrl: string = 'https://celularesapp-dd67e.firebaseio.com/celulares/';



  constructor( private http: HttpClient) { }

  nuevoCelular( celular: Celular) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // https://angular.io/guide/http#making-a-post-request
    return this.http.post<Celular>( this.celularesUrl, celular , httpOptions )
          .pipe(
          map( res => {
            console.log(res.name);
            return res;
          }));
  }
  actualizarCelular( celular: Celular, key$: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
    };
    // https://angular.io/guide/http#making-a-post-request
    return this.http.put<Celular>(`${  this.celularUrl }${ key$ }.json` , celular , httpOptions )
          .pipe(
          map( res => {
            console.log(res.name);
            return res;
          }));
  }
  getCelular ( key$: string ) {
    console.log(`${ this.celularUrl }${ key$ }.json`);
    return this.http.get<Celular>( `${ this.celularUrl }${ key$ }.json` );
  }
  getCelulares ( ) {
    return this.http.get<Celular>( this.celularesUrl );
  }
  borrarCelular( key$: string) {
    let url = `${ this.celularUrl }/${ key$ }.json`;
    console.log(url);
    return this.http.delete( url);
  }
}
