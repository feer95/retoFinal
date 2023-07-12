import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CochesService } from 'src/app/shared/coches.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  car: Car = {
  };

  constructor(
    private cochesService: CochesService,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
  }

  editCar(): void {
    this.cochesService.edit(this.car).subscribe(
      (data: any) => {
        this.toastr.success('Coche editado correctamente');
        console.log('Coche Editado', data);
      },
      (error) => {
        console.log('Error al editar el coche:', error);
        this.toastr.error('Ocurrió un error al editar el coche');
      }
    );
  }
}


