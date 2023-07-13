import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';
import { CochesService } from 'src/app/shared/coches.service';
import { ToastrService } from 'ngx-toastr';
import { MantenimientosService } from 'src/app/shared/mantenimientos.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  showModal: boolean = false;
  matriculaEliminar?: string
  cars: Car[] = [];
  idUsuario?: number 
  numeroCoches: number = 0;
  selectedCarId: number = 0;

  

  constructor(public userService: UsuarioService, private cochesService: CochesService, private toastr : ToastrService, private mantenimientosService: MantenimientosService)
   {
    {
      this.cochesService.getOne(this.userService.logueadoId).subscribe(
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
        },
        
      );
    }
   }

  eliminarCoche(): void {
    if (this.matriculaEliminar) 
    {
      this.cochesService.delete(this.matriculaEliminar).subscribe(
        (data: any) => {
          this.toastr.success('Coche eliminado correctamente');
          console.log("Coche eliminado", data);
          this.matriculaEliminar = "";
          this.idUsuario = this.userService.logueadoId
          this.cochesService.getOne(this.idUsuario).subscribe(
            (respuesta: any) => {
              console.log("Respuesta:", respuesta);
              if (!respuesta.error) {
                this.cars = respuesta.data;
                this.numeroCoches = respuesta.data.length
                console.log("coches:", this.cars);
              } else {
                console.log('Error al obtener los coches:', respuesta.mensaje);
                this.toastr.error("NO!")
              }
            },
            
          );
        }, 
       
      );
    } else {
      console.log('Matrícula inválida');
    }
  }
  
}
  

