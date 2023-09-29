import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  correo: string = '';
  contrasena: string = '';

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
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

  async login() {
    // Validar que el correo y la contraseña no esten vacios
    if (this.correo == "") {
      alert('Debe ingresar un correo para iniciar sesión.');
      return;
    }
    if (this.contrasena == "") {
      alert('Debe ingresar una contraseña para iniciar sesión.');
      return;
    }

    await this.auth.signInWithEmailAndPassword(this.correo, this.contrasena)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        console.table(userCredential.user?.providerData);
      }).catch((error) => {
        // Manejar errores de inicio de sesión
        alert('Error al iniciar sesión.');
        console.error('Error al iniciar sesión:', error);
      });
  }
}
