import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private router: Router,
    private auth: AngularFireAuth,
  ) { }

  ngOnInit() {
    // Redirigir a principal si ya hay un usuario logeado
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.router.navigate(['/home']);
        return;
      }
    });
  }

  async signup() {
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

    await this.auth.createUserWithEmailAndPassword(this.correo, this.contrasena)
      .then((userCredential) => {
        // Registro exitoso
        alert('Usuario registrado');
        console.table(userCredential.user?.providerData);
        // ir a la página de inicio
        this.router.navigate(['/home']);
      }).catch((error) => {
        // Manejar errores de registro
        console.error('Error al registrar el usuario:', error);
      });
  }
}
