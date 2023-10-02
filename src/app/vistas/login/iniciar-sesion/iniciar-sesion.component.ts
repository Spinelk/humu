import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  iniciarSesion() {
    // Validar que el correo y la contraseña no esten vacios
    if (this.correo == "") {
      alert('Debe ingresar un correo para iniciar sesión.');
      return;
    }
    if (this.contrasena == "") {
      alert('Debe ingresar una contraseña para iniciar sesión.');
      return;
    }

    this.ServicioAutenticacion.iniciarSesionConCorreo(this.correo, this.contrasena)
  }
}
