import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{
  nombre : string = "Erik Steg";
  genero : string = 'masculino';
  clientes : string[] = ["maria", "Pedrito", "Juancito", "Papa"];
  miObservable = interval(1000);
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Data de promesa');
    }, 3500);
  });
  objeto = {
    nombre: 'erik',
    edad: 27,
    pais: 'arg'
  }

  heroes = [
    {
      nombre: 'tuma ma',
      vuela: true
    },
    {
      nombre: 'sipderman',
      vuela: false
    },
    {
      nombre: 'Superman',
      vuela: true
    }
  ]

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  senorioMap = {
    'masculino': 'Señor',
    'femenino': 'Señora'
  }

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    if(this.genero == 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Roberta Robertita'; 
    }
    else{
      this.genero = 'masculino';
      this.nombre = "Erik Steg"
    }
  }

  atenderCliente(){
    this.clientes.pop();
  }
}
