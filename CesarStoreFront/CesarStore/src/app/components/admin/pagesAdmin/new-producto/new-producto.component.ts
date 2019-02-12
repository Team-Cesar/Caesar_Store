import { Component, OnInit, ApplicationRef, HostBinding, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: []
})
export class NewProductoComponent implements OnInit {

  @HostBinding('class') clases = 'row';

   producto: Producto = {
    pro_nam: '',
    pro_des: '',
    pro_pri: null,
    pro_sto: null,
    pro_id: null,
  };

  edit: boolean = false;

  constructor(private _productoService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  saveNewProducto() {

    this._productoService.saveProducto(this.producto)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin']);
        },
        err => console.error(err)
      );
      console.log(this.producto);
  }


}
