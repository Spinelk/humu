import { Component } from '@angular/core';
import { AutenticacionService, UserData } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  userData: UserData = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  registrar() {
    // Validar que los campos no esten vacios
    if (this.userData.username == "") {
      alert('Debe ingresar un correo.');
      return;
    }
    if (this.userData.password == "") {
      alert('Debe ingresar una contraseña.');
      return;
    }
    if (this.userData.password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    this.ServicioAutenticacion.registrarUsuario(this.userData)
  }
}
