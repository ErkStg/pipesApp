import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas : boolean = false;
  ordenarPor : string = 'nombre';
  heroes : Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },{
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  cambiarMayus(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrdern(criterio : string){
    this.ordenarPor = criterio;
  }
}
