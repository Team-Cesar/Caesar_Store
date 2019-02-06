import { Component, OnInit } from '@angular/core';
import { Celular } from '../../interfaces/celular.interface';
import { CelularesService } from '../../services/celulares.service';

@Component({
  selector: 'app-celulares1',
  templateUrl: './celulares1.component.html',
  styles: []
})
export class Celulares1Component implements OnInit {

  celulares: Celular;
  loading: boolean = true;

   constructor( private _celularesService: CelularesService) {

   }

   ngOnInit() {
   }
 }

