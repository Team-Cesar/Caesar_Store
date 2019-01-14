import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {  }

  buscarArticulo(texto: string) {

    if (texto.length === 0) {
        return;
    }
    console.log(texto);
  }

}
