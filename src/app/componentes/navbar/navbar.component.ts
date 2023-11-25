import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuario = this.ServicioAutenticacion.usuario.value;

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  cerrarSesion() {
    this.ServicioAutenticacion.cerrarSesion();
  }
}
