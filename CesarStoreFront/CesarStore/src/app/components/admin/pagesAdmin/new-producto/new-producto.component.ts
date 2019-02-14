import { Component, OnInit, ApplicationRef, HostBinding, ɵConsole } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { Marca } from '../../interfaces/marca.interface';



@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: []
})
export class NewProductoComponent implements OnInit {


   producto: Producto = {
    pro_nam: '',
    pro_des: '',
    pro_pri: null,
    pro_sto: null,
    pro_id: null,
  };

   marcas: any = [];
   categorias: any = [];

  edit: boolean = false;

  constructor(private _productoService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) {

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

  ngOnInit() { }

  saveNewProducto() {

    this._productoService.saveProducto(this.producto)
      .subscribe(
        res => {
/*           console.log(res);
 */          this.router.navigate(['/admin']);
        },
        err => console.error(err)
      );
      console.log(this.producto);
  }

}
