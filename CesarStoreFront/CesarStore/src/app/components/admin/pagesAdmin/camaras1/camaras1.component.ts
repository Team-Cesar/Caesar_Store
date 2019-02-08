import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-camaras1',
  templateUrl: './camaras1.component.html',
  styles: []
})
export class Camaras1Component implements OnInit {

  camaras: any = [];
  loading: boolean = true;
  categoria: any = 2;

  constructor( private _camarasService: ProductosService) {

    this._camarasService.getProductos(this.categoria)
    .subscribe( data => {
     this.camaras = data;
     this.loading = false;
     console.log(data);
    });
   }

  ngOnInit() {

  }

  borrarProducto(pro_id) {
    this._camarasService.borrarProducto(pro_id)
    .subscribe( respuesta => {
      if ( respuesta) {
        console.error(respuesta);
      } else {
        // todo bien
        delete this.camaras[pro_id];
      }
    });
  }

}


