import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cuenta = 0;
  mensaje = 'Bienvenido';
  correo = '';

  constructor(
    private router: Router,
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  ngOnInit() {
  }

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
