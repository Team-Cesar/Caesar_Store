import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: []
})
export class EditProductoComponent implements OnInit {

  @HostBinding('class') clases = 'row';

   producto: Producto = {
    pro_nam: '',
    pro_des: '',
    pro_pri: null,
    pro_sto: null,
    pro_id: null,
  };
  id: string;
  edit: boolean = false;

  constructor(private _productoService: ProductosService,
              private router: Router,
              private route: ActivatedRoute) {
                this.route.params.subscribe( parametros => {
                  console.log(parametros);
                  this.id = parametros['id'];
                  if ( this.id !== 'nuevo') {
                    this._productoService.getProducto( this.id);
                  }

                });
               }

  ngOnInit() {
   /*  const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this._productoService.getProducto(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    } */
  }
editarCelular( ) {
this._productoService.actualizarCelular( this.producto, this.id )
.subscribe( data => {
  console.log(data);
});
}



  updateProducto() {
  this._productoService.updateProducto(this.producto.pro_id, this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/producto1']);
        },
        err => console.error(err)
      );
  }

}
