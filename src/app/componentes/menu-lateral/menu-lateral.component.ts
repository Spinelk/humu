import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  nombreUsuario: string = this.usuario.usuario;
  correoUsuario: string = this.usuario.correo;
  inicialUsuario: string = this.nombreUsuario.charAt(0).toUpperCase();
  constructor(
    private ServicioAutenticacion: AutenticacionService,
    private router: Router
  ) {
  }
  cerrarSesion() {
    this.ServicioAutenticacion.cerrarSesion();
  }
}

