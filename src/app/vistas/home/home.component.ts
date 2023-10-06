import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  cuenta = 0;
  mensaje = 'Bienvenido';
  correo = '';

  constructor(
    private router: Router,
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  cerrarSesion() { }
}
