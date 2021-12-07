import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower : string = "steg";
  nombreUpper : string = "STEG";
  nombreCompleto : string = "ErIK sTEg";

  fecha : Date = new Date(); 

}
