import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  usuarioActual: User | null = null;

  constructor(
    private ServicioAutenticacion: AutenticacionService,
    private router: Router
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

