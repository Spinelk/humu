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
        console.log('Log In: Usuario registrado');
        this.router.navigate(['/home']);
        return;
      }
    });
  }

  async login() {
    await this.auth.signInWithEmailAndPassword(this.correo, this.contrasena)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        alert('Usuario logueado');
        console.log('Usuario logueado:', userCredential.user);
      }).catch((error) => {
        // Manejar errores de inicio de sesión
        console.error('Error al iniciar sesión:', error);
      });
  }
}
