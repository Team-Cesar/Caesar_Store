import { Component, OnInit, ApplicationRef, HostBinding, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Celular } from '../../interface/celular.interface';
import { CelularesService } from '../../services/celulares.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-celular1',
  templateUrl: './celular1.component.html',
  styles: []
})
export class Celular1Component implements OnInit {

  @HostBinding('class') clases = 'row';

  celular: Celular = {
    pro_nam: '',
    pro_des: '',
    pro_pri: null,
    pro_sto: null,
  };

  edit: boolean = false;

  constructor(private _celularService: CelularesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  /*   const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this._celularService.getCelular(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.celular = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    } */
  }

  saveNewCelular() {

    this._celularService.saveCelular(this.celular)
      .subscribe(
        res => {
          console.log(res);
/*           this.router.navigate(['/celular1']);
 */        },
        err => console.error(err)
      );
      console.log(this.celular);
  }

 /*  updateCelular() {
  this._celularService.updateCelular(this.celular.pro_id, this.celular)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/celular1']);
        },
        err => console.error(err)
      );
  } */

}
