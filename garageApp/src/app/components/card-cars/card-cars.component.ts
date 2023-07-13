import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Respuesta } from 'src/app/models/respuesta';
import { CochesService } from 'src/app/shared/coches.service';
import { MantenimientosService } from 'src/app/shared/mantenimientos.service';
import { CardServiceComponent } from '../card-service/card-service.component';

@Component({
  selector: 'app-card-cars',
  templateUrl: './card-cars.component.html',
  styleUrls: ['./card-cars.component.css']
})
export class CardCarsComponent implements OnInit {
  @Input() idUsuario: number = 0;
  cars: Car[] = [];
  numeroCoches?: number;

  constructor(private cochesService: CochesService, private mantenimientosService: MantenimientosService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.cochesService.getOne(this.idUsuario).subscribe(
      (respuesta: any) => {
        console.log("Respuesta:", respuesta);
        if (!respuesta.error) {
          this.cars = respuesta.data;
          this.numeroCoches = respuesta.data.length
          console.log("coches:", this.cars);
          console.log("Numero de coches:" , this.numeroCoches);
          
        } else {
          console.log('Error al obtener los coches:', respuesta.message);
        }
      }
    );
  }

  getImageUrl(marca: string | undefined): string {
    if (!marca) {
      return './assets/img/else.png';
    } else if (marca === 'Toyota') {
      return './assets/img/toyota.png';
    } else if (marca === 'Honda') {
      return './assets/img/honda.png';
    } else if (marca === 'Bmw') {
      return './assets/img/bmw.png';
    } else if (marca === 'Volkswagen') {
      return './assets/img/volkswagen.png';
    } else if (marca === 'Renault') {
      return './assets/img/renault.png';
    } else if (marca === 'Peugeot') {
      return './assets/img/peugeot.png';
    } else if (marca === 'Ford') {
      return './assets/img/ford.png';
    } else if (marca === 'Mercedes') {
      return './assets/img/mercedes.png';
    } else if (marca === 'Audi') {
      return './assets/img/audi.png';
    } else if (marca === 'Opel') {
      return './assets/img/opel.png';
    } else if (marca === 'Fiat') {
      return './assets/img/fiat.png';
    } else if (marca === 'Skoda') {
      return './assets/img/skoda.png';
    } else if (marca === 'Volvo') {
      return './assets/img/volvo.png';
    } else if (marca === 'Nissan') {
      return './assets/img/nissan.png';
    } else if (marca === 'Citroen') {
      return './assets/img/citroen.png';
    } else if (marca === 'Seat') {
      return './assets/img/seat.png';
    } else if (marca === 'Hyundai') {
      return './assets/img/hyundai.png';
    } else if (marca === 'Kia') {
      return './assets/img/kia.png';
    } else if (marca === 'Mazda') {
      return './assets/img/mazda.png';
    } else if (marca === 'Mini') {
      return './assets/img/mini.png';
    } else {
      return './assets/img/else.png';
    }
  }
  

}
