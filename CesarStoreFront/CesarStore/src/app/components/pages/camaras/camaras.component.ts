import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductPublic } from 'src/app/models/Public/ProductPublic';
import { ImageProductPublic } from 'src/app/models/Public/ImageProductPublic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent implements OnInit {
  public productos:ProductPublic[] = new Array();
  public marcas:String[] = new Array();
  public producto:ProductPublic = new ProductPublic();
  public imagenes:string[] = new Array<string>();
  constructor(private _data:DataService, private _router:Router) { }

  ngOnInit() {
    this._data.obtenerProductosPorCategoria(2).subscribe((camaras)=>{
      this.productos = camaras;
    });
  }

  VerProducto(index:number){
    // let id:number = this.productos[index].prod_id;
      this.producto = this.productos[index];
      localStorage.setItem('product',JSON.stringify(this.producto));
      // this._router.navigateByUrl('/compra');
  }
}
