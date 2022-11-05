import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor="";
  lista=[];
  mensaje="";

  constructor() {}

  Agregar(){
    if(!!this.valor){
      this.lista.push(this.valor);
      this.valor = "";
    }else{
      this.mensaje = "Error al capturar datos";
    }
  }
}
