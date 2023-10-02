import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private ServicioAutenticacion: AutenticacionService,
    private router: Router,
  ) { }

  cerrarSesion() {
    // Cerrar sesion con firebase
    try {
      this.ServicioAutenticacion.cerrarSesion();
      alert('Sesion cerrada');
      this.router.navigate(['/login']);
    } catch {
      // Manejar el error
      alert('Error al cerrar sesion');
      console.log('Error al cerrar sesion');
    }
  }
}
