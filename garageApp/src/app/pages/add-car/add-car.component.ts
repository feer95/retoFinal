import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';
import { CochesService } from 'src/app/shared/coches.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  matricula?: string;
  marca?: string;
  modelo?: string;
  anoFabricacion?: number;
  kilometraje?: number;
  color?: string;
  combustible?: string;
  cv?: number;
  
  constructor(public userService: UsuarioService, private cochesService: CochesService, private toastr : ToastrService, private router: Router) {}

  addCar(): void {
    const nuevoCoche: Car = {
      id_usuario: this.userService.logueadoId,
      marca: this.marca,
      modelo: this.modelo,
      matricula: this.matricula,
      anoFabricacion: this.anoFabricacion,
      kilometraje: this.kilometraje,
      color: this.color,
      combustible: this.combustible,
      cv: this.cv,
    };
  
    this.cochesService.add(nuevoCoche).subscribe(
      (data: any) => {
        this.toastr.success('El coche se agregó correctamente');
        console.log("coche Añadido", data);
        this.router.navigate(['/cars']);
      },
      (error) => {
        console.log('Error al agregar el coche:', error);
        this.toastr.error('Ocurrió un error al agregar el coche');
      }
    );
  }
  
  
  
  
}
