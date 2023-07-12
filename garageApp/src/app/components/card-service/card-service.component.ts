import { Component } from '@angular/core';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']
})
export class CardServiceComponent {
  servicios = [
    { title: 'Servicio 1', description: 'Descripción del Servicio 1', date: new Date('2023-01-01') },
    { title: 'Servicio 2', description: 'Descripción del Servicio 2', date: new Date('2023-02-01') },
    { title: 'Servicio 3', description: 'Descripción del Servicio 3', date: new Date('2023-03-01') },
    { title: 'Servicio 4', description: 'Descripción del Servicio 4', date: new Date('2023-04-01') },
    


  ];

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
  
}