import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  user: User = {
    id_usuario: 0,
    nombre: '',
    apellidos: '',
    edad: 0,
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private userService: UsuarioService, private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.login(this.user).subscribe(
      (response) => {
          const responseData = response.data; 
          console.log(response.data);
          if (responseData) {
            this.toastr.success('Bienvenido!');
            this.userService.logueadoId = response.data[0].id_usuario;            
            this.userService.logueado = true
            console.log("User logeado??" + this.userService.logueado);
            this.userService.user = response.data[0]
            this.router.navigate(['/cars']);
          } else {
            this.toastr.error('Los datos no coinciden');
            console.log('Los datos de inicio de sesión no coinciden');
            
          }
        }
      );
    }
  }
}

