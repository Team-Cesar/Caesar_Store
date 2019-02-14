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
    pro_sta: null,
    cat_id: null,
    bra_id: null,
    pro_id: null,
  };
  id: string;
  edit: boolean = false;
  marcas: any = [];
   categorias: any = [];

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
                this._productoService.getMarcas()
                .subscribe(
                  res => {
                    console.log( res );
                    this.marcas = res;
                  }
                );
                this._productoService.getCategorias()
                .subscribe(
                  res => {
                    console.log(res);
                    this.categorias = res;
                  }
                );


               }

  ngOnInit() {
 const params = this.route.snapshot.params;
    if (params.id) {
      this._productoService.getProducto(params.id)
        .subscribe(
          res => {
           console.log(res[0]);
           this.producto = res[0];
          },
          err => console.log(err)
        );
    }
  }


  updateProductoH() {
   console.log(this.producto);
   this._productoService.updateProducto( this.producto, this.producto.pro_id )
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin']);
        },
        err => console.error(err)
      );
  }

}
