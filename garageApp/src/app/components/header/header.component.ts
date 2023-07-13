import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarHeader: boolean = true;

  constructor(public userService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.mostrarHeader = this.showHeader();
  }

  showHeader(): boolean {
    const rutaActual = this.router.url;

    if (rutaActual === '' || rutaActual === 'login' || rutaActual === 'register') {
      return false;
    }
    return true;
  }
}
