import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salida-component',
  templateUrl: './salida-component.component.html',
  styleUrls: ['./salida-component.component.css']
})
export class SalidaComponentComponent{
  textSalida = "El empleado aun no sale"

  setSalida(){
    this.textSalida = "El empleado ha registrado su salida";
  }

}



