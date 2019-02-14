import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ProductPublic } from 'src/app/models/Public/ProductPublic';
import { ImageProductPublic } from 'src/app/models/Public/ImageProductPublic';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent implements OnInit {
  public productos:ProductPublic[] = new Array();
  public start:boolean = false;
  public producto:ProductPublic = new ProductPublic();
  public imagenes:Image[] = [];

  constructor(private _data:DataService, private _router:Router) { }

  ngOnInit() {
    this._data.obtenerProductosPorCategoria(2).subscribe((camaras)=>{
      this.productos = camaras;
      this.productos.forEach((producto, index)=>{
        this._data.obtenerImagenesDeProducto(producto.pro_id).subscribe((imagenes:Image[])=>{
          this.imagenes[index] = imagenes[0];
        })
      });
      this.start = true;
    });
  }

  VerProducto(index:number){
    // let id:number = this.productos[index].prod_id;
      this.producto = this.productos[index];
      localStorage.setItem('product',JSON.stringify(this.producto));
      this._router.navigateByUrl('/compra');
  }
}
