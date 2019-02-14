import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Categoria } from '../../interfaces/categoria.interface';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {


categorias: any = [];
marcas: any = [];
loading: boolean = true;
categoria: Categoria = {
  cat_nam: '',
};


  constructor( private _editarService: ProductosService, private router: Router, private activatedRoute: ActivatedRoute) {

      this._editarService.getCategorias()
        .subscribe( data => {
          this.categorias = data;
/*           this.loading = false;
 */          console.log(data);
        });
        this._editarService.getMarcas()
        .subscribe( data => {
          this.marcas = data;
/*           this.loading = false;
 */          console.log(data);
        });

   }

  ngOnInit() {
  }
  borrar (bra_id) {
this._editarService.borrarMarca( bra_id)
    .subscribe( respuesta => {
      if ( respuesta ) {
        console.error( respuesta );
      } else {
        delete this.marcas[bra_id];
      }
    });
  }
  grabar () {
    this._editarService.saveCategoria(this.categoria)
    .subscribe( data => {
      this.router.navigate(['/admin']);
    },
    err => console.error(err)
    );
    console.log(this.categoria);
  }

}
