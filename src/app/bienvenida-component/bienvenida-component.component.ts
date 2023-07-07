import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenida-component',
  templateUrl: './bienvenida-component.component.html',
  styleUrls: ['./bienvenida-component.component.css']
})
export class BienvenidaComponentComponent {

  mensaje!: string;
  fechaActual = new Date();

  registrarEntrada() {

    var horaActual = this.fechaActual.getHours();
    var minutosActuales = this.fechaActual.getMinutes();
    var segundosActuales = this.fechaActual.getSeconds();


    this.mensaje = "Entrada registrada a las " + horaActual + ":" + minutosActuales + ":" + segundosActuales;


  }

  registrarSalida() {

    var horaActual = this.fechaActual.getHours();
    var minutosActuales = this.fechaActual.getMinutes();
    var segundosActuales = this.fechaActual.getSeconds();


    this.mensaje = "Salida registrada a las " + horaActual + ":" + minutosActuales + ":" + segundosActuales;


  }

}
