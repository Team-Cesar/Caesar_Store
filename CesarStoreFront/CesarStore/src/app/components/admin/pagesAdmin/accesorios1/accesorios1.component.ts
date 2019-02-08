import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-accesorios1',
  templateUrl: './accesorios1.component.html',
  styles: []
})
export class Accesorios1Component implements OnInit {

  accesorios: any = [];
  loading: boolean = true;
  categoria: any = 5;

  constructor( private _accesoriosService: ProductosService) {

    this._accesoriosService.getProductos(this.categoria)
    .subscribe( data => {
     this.accesorios = data;
     this.loading = false;
     console.log(data);
    });
   }

  ngOnInit() {

  }

  borrarProducto(pro_id) {
    this._accesoriosService.borrarProducto(pro_id)
    .subscribe( respuesta => {
      if ( respuesta) {
        console.error(respuesta);
      } else {
        // todo bien
        delete this.accesorios[pro_id];
      }
    });
  }

}


