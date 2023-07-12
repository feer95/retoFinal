import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user: User = new User();

  constructor(private usuarioService: UsuarioService, public toastr: ToastrService) {}

  onSubmit() {
    this.user.id_usuario = this.usuarioService.logueadoId; 
    this.usuarioService.editUser(this.user).subscribe(
      (response) => {
        this.toastr.success('Usuario editado exitosamente');
        console.log('Usuario actualizado correctamente', response);
      },
      (error) => {
        this.toastr.error('Usuario NO editado');
        console.log('Error al actualizar el usuario:', error);
      }
    );
  }
}
