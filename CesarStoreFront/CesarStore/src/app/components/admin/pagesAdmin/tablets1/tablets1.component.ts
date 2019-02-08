import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tablets1',
  templateUrl: './tablets1.component.html',
  styles: []
})
export class Tablets1Component implements OnInit {

  tablets: any = [];
  loading: boolean = true;
  categoria: any = 3;

  constructor( private _tabletsService: ProductosService) {

    this._tabletsService.getProductos(this.categoria)
    .subscribe( data => {
     this.tablets = data;
     this.loading = false;
     console.log(data);
    });
   }

  ngOnInit() {

  }

  borrarProducto(pro_id) {
    this._tabletsService.borrarProducto(pro_id)
    .subscribe( respuesta => {
      if ( respuesta) {
        console.error(respuesta);
      } else {
        // todo bien
        delete this.tablets[pro_id];
      }
    });
  }

}


