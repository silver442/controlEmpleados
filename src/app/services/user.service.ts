import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IUser from 'src/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

  }

  login(id:number, pin: number):boolean {
    // SIMULACION DE LOGIN POR BASE DE DATOS
    return false;
  }

}
