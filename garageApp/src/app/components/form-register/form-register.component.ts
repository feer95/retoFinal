import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service'; 
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {
  user : User = new User
  
  
  constructor(private usuarioService: UsuarioService, public toastr: ToastrService, private router: Router) { }

  onSubmit() {
    this.usuarioService.register(this.user).subscribe(
      response => {
        this.toastr.success('Registro exitoso');
        this.router.navigate(['/login']);

        console.log('Registro exitoso', response);
      },
      error => {
        this.toastr.error('Error en el registro');

        console.log('Error en el registro', error);
      }
    );
  }
  
}
