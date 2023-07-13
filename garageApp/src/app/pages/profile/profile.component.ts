import { Component } from '@angular/core';
import { CochesService } from 'src/app/shared/coches.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { CarsComponent } from '../cars/cars.component'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public userService: UsuarioService, public cochesService: CochesService,) {}
}
