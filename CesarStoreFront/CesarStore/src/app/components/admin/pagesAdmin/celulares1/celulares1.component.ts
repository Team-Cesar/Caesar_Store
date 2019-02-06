import { Component, OnInit } from '@angular/core';
import { Celular } from '../../interfaces/celular.interface';
import { CelularesService } from '../../services/celulares.service';

@Component({
  selector: 'app-celulares1',
  templateUrl: './celulares1.component.html',
  styles: []
})
export class Celulares1Component implements OnInit {

  celulares: any = [];
  loading: boolean = true;

  constructor( private _celularesService: CelularesService) {

    this._celularesService.getCelulares()
    .subscribe( data => {
     this.celulares = data;
     this.loading = false;
     console.log(data);
    });
   }

  ngOnInit() {

  }

  borrarCelular(pro_id) {
    this._celularesService.borrarCelular(pro_id)
    .subscribe( respuesta => {
      if ( respuesta) {
        console.error(respuesta);
      } else {
        // todo bien
        delete this.celulares[pro_id];
      }
    });
  }

}


