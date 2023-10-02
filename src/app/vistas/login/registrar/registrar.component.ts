import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  registrar() {
    // Validar que los campos no esten vacios
    if (this.correo == "") {
      alert('Debe ingresar un correo.');
      return;
    }
    if (this.contrasena == "") {
      alert('Debe ingresar una contraseña.');
      return;
    }
    if (this.contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    this.ServicioAutenticacion.registrarUsuarioConCorreo(this.correo, this.contrasena)
  }
}
