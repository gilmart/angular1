import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(public peticion:HttpClient) { }

  consultarReservas():Observable<any>{
    let uri="http://apigmg.herokuapp.com/hotelselina/habitaciones"
    return this.peticion.get(uri)
  }

    
}
