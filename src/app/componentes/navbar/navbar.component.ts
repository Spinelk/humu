import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  nombreUsuario: string = this.usuario.usuario;
  correoUsuario: string = this.usuario.correo;
  constructor(
    private ServicioAutenticacion: AutenticacionService,
    private router: Router,
  ) { }

  cerrarSesion() {
    this.ServicioAutenticacion.cerrarSesion();
  }
}
