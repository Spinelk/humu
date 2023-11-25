import { Component } from '@angular/core';
import { AutenticacionService, UserData } from 'src/app/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  userData: UserData = {
    nombreUsuario: '',
    correo: '',
    contrasena: '',
    verificadorContrasena: '',
  };

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  registrar() {
    // Validar que los campos no esten vacios
    if (this.userData.nombreUsuario == "") {
      alert('Debe ingresar un correo.');
      return;
    }
    if (this.userData.contrasena == "") {
      alert('Debe ingresar una contraseña.');
      return;
    }
    if (this.userData.contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (this.userData.verificadorContrasena == "") {
      alert('Debe verificar la contraseña.');
      return;
    }
    if (this.userData.contrasena != this.userData.verificadorContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.ServicioAutenticacion.registrarUsuario(this.userData)
  }
}
