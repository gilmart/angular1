import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {



  constructor(public peticion:HttpClient) { }

    consultarHabitaciones():Observable<any>{
      let uri="http://apigmg.herokuapp.com/hotelselina/habitaciones"
      return this.peticion.get(uri)
    }
  
}

//todo servicio de angular lo activa un componente