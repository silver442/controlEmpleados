import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private usrService:UserService, private router:Router){

  }

  doLogin(idUser:string, pin:string): void {
    
    var idusr:number = parseInt("0"+idUser);
    var pinusr:number = parseInt("0"+pin);

    this.usrService.login(idusr, pinusr).then((canLogIn) =>{

      if(canLogIn)
        this.router.navigate(["/bienvenida"])
      else
        alert("ID Usuario o PIN Invalido")

    })

  }

}
