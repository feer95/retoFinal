import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';
import { CochesService } from 'src/app/shared/coches.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(public userService: UsuarioService, private cochesService: CochesService, private toastr : ToastrService) {}

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
                console.log("coches:", this.cars);
              } else {
                console.log('Error al obtener los coches:', respuesta.message);
              }
            },
            (error) => {
              console.log('Error al obtener los coches:', error);
            }
          );
        }, 
        (error) => {
          console.log('Error al eliminar el coche:', error);
          this.toastr.error('Ocurrió un error al eliminar el coche');
        }
      );
    } else {
      console.log('Matrícula inválida');
    }
  }
  
  

}



