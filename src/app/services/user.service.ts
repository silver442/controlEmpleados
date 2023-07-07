import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import IUser from 'src/models/IUser';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: IUser[] = [
    {
      id: 1,
      nombre: "Alex",
      apellido: "Rodriguez",
      pin: 1234,
      rfc: "aa11bbc23",
      checkIn: undefined,
      checkOut: undefined
    },
    {
      id: 2,
      nombre: "Pedro",
      apellido: "Garcia",
      pin: 1234,
      rfc: "aa11bbc23",
      checkIn: undefined,
      checkOut: undefined
    },
  ]

  constructor() { 

  }

  getUser(idx:number):Observable<IUser> {
    return of(this.users[idx])
  }

  login(id:number, pin: number):Promise<any> {
    // SIMULACION DE LOGIN POR BASE DE DATOS
    let observ:Observable<IUser> = this.getUser(id-1);
    return new Promise(function(resolve, reject){

      if(id < 1 || id > 2){
        resolve(false);
      }
  
      if(observ == null)
        resolve(false)
      observ.subscribe(
        {
          next: (user) => resolve(user.pin == pin),
          error: () => resolve(false)
        }
      )

    })
  }

}
