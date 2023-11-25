import { Component } from '@angular/core';
import { AutenticacionService, UserData } from 'src/app/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  userData: UserData = {
    nombreUsuario: '',
    contrasena: ''
  };

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  iniciarSesion() {
    // Validar que el correo y la contraseña no esten vacios
    if (this.userData.nombreUsuario == "") {
      alert('Debe ingresar un nombre de usuario para iniciar sesión.');
      return;
    }
    if (this.userData.contrasena == "") {
      alert('Debe ingresar una contraseña para iniciar sesión.');
      return;
    }

    this.ServicioAutenticacion.iniciarSesion(this.userData)
  }
}
