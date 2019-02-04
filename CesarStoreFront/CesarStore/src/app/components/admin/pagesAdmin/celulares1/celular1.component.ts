import { Component, OnInit } from '@angular/core';
import { Celular } from '../../interfaces/celular.interface';
import { NgForm } from '@angular/forms';
import { CelularesService } from '../../services/celulares.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-celular1',
  templateUrl: './celular1.component.html',
  styles: []
})
export class Celular1Component implements OnInit {

  // creando un objeto
 celular: Celular = {
    name: '',
    marca: '',
    nombre: '',
    cantidad: null,
    precio: null,
  };
nuevo: boolean = false;
id: string;


  constructor( private _celularesService: CelularesService,
               private router: Router,
               private route: ActivatedRoute) {
                this.route.params.subscribe( parametros => {
                  console.log(parametros);
                  this.id = parametros['id'];
                  if (  this.id !== 'nuevo') {
                    this._celularesService.getCelular( this.id)
                    .subscribe( celular => this.celular = celular );
                  }
                });
               }

  ngOnInit() {
  }
   guardar() {
    console.log(this.celular);

    if ( this.id === 'nuevo') {
      // insertando
      this._celularesService.nuevoCelular( this.celular )
      .subscribe( data => {
        console.log(data);
   this.router.navigate(['/celular', data.name]);
 },
error => {
  return console.error(error);
});
    } else {
      // actualizando
      this._celularesService.actualizarCelular( this.celular, this.id )
      .subscribe( data => {
        console.log(data);
 },
error => {
  return console.error(error);
});
    }


  }
  agregarNuevo (forma: NgForm) {
    this.router.navigate(['/celular', 'nuevo']);
    forma.reset({
      marca: 'Apple',
    });
  }

}

