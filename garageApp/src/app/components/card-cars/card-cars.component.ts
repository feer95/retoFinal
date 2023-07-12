import { Component } from '@angular/core';

@Component({
  selector: 'app-card-cars',
  templateUrl: './card-cars.component.html',
  styleUrls: ['./card-cars.component.css']
})
export class CardCarsComponent {
  cars = [
    { marca: 'Nissan', modelo: 'Corolla', matricula: "1234ABC", anoFabricacion: 2020, kilometraje: 50000, color: 'Rojo', combustible: 'Gasolina', cv: 150 },
    { marca: 'Volvo', modelo: 'M8 Competition',  matricula: "1234BCA", anoFabricacion: 2019, kilometraje: 2000, color: 'Rojo', combustible: 'Gasolina', cv: 625 },
    { marca: 'Mini', modelo: 'Civic',  matricula: "1234CBA", anoFabricacion: 2018, kilometraje: 70000, color: 'Azul', combustible: 'Gasolina', cv: 130 }
  ];

  getImageUrl(marca: string): string {
    if (marca === 'Toyota') {
      return './assets/img/toyota.png';
    } else if (marca == 'Honda') {
      return './assets/img/honda.png';
    } else if (marca == 'Bmw') {
      return './assets/img/bmw.png';
    } else if (marca == 'Volkswagen') {
      return './assets/img/volkswagen.png';
    } else if (marca == 'Renault') {
      return './assets/img/renault.png';
    } else if (marca == 'Peugeot') {
      return './assets/img/peugeot.png';
    } else if (marca == 'Ford') {
      return './assets/img/ford.png';
    } else if (marca == 'Mercedes') {
      return './assets/img/mercedes.png';
    } else if (marca == 'Audi') {
      return './assets/img/audi.png';
    } else if (marca == 'Opel') {
      return './assets/img/opel.png';
    } else if (marca == 'Fiat') {
      return './assets/img/fiat.png';
    } else if (marca == 'Skoda') {
      return './assets/img/skoda.png';
    } else if (marca == 'Volvo') {
      return './assets/img/volvo.png';
    } else if (marca == 'Nissan') {
      return './assets/img/nissan.png';
    } else if (marca == 'Citroen') {
      return './assets/img/citroen.png';
    } else if (marca == 'Seat') {
      return './assets/img/seat.png';
    } else if (marca == 'Hyundai') {
      return './assets/img/hyundai.png';
    } else if (marca == 'Kia') {
      return './assets/img/kia.png';
    } else if (marca == 'Mazda') {
      return './assets/img/mazda.png';
    } else if (marca == 'Mini') {
      return './assets/img/mini.png';
    } else {
       return './assets/img/else.png'
    }
  }

}
