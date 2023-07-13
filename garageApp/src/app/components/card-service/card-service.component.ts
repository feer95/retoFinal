import { Component } from '@angular/core';
import { MantenimientosService } from 'src/app/shared/mantenimientos.service';
import { Mantenimiento } from 'src/app/models/mantenimiento';
import { Respuesta } from 'src/app/models/respuesta';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']
})
export class CardServiceComponent {

  mantenimientos: Mantenimiento[] = [];

    constructor (public mantenimientosService: MantenimientosService) {}

    
    
    

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
  
}