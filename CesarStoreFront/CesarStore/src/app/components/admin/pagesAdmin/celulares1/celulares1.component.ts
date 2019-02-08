import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-celulares1',
  templateUrl: './celulares1.component.html',
  styles: []
})
export class Celulares1Component implements OnInit {

  celulares: any = [];
  loading: boolean = true;
   categoria: any = 1;

  constructor( private _celularesService: ProductosService) {

    this._celularesService.getProductos(this.categoria)
    .subscribe( data => {
     this.celulares = data;
     this.loading = false;
     console.log(data);
    });
   }

  ngOnInit() {

  }

  borrarProducto(pro_id) {
    this._celularesService.borrarProducto(pro_id)
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


