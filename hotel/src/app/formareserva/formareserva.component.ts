import { Component } from '@angular/core';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formareserva',
  templateUrl: './formareserva.component.html',
  styleUrls: ['./formareserva.component.css']
})
export class FormareservaComponent{

  public reservas:any[]=[]

  constructor(public servicioReserva:ReservasService) { 
    servicioReserva.consultarReservas()
    .subscribe(respuesta=>{
      console.log(respuesta)
      this.reservas=respuesta
    })
  }

  

}
