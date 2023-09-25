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
        console.log('SignUp: Usuario registrado');
        this.router.navigate(['/home']);
        return;
      }
    });
  }

  async signup() {
    await this.auth.createUserWithEmailAndPassword(this.correo, this.contrasena)
      .then((userCredential) => {
        // Registro exitoso
        alert('Usuario registrado');
        console.log('Usuario registrado:', userCredential.user);
        // ir a la página de inicio
        this.router.navigate(['/home']);
      }).catch((error) => {
        // Manejar errores de registro
        console.error('Error al registrar el usuario:', error);
      });
  }
}
