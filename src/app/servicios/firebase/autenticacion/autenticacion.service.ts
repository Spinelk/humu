import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

export interface UserData {
  username: string;
  email?: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  dominio: string = 'http://127.0.0.1:8000/';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private http: HttpClient,
  ) {
  }

  iniciarSesion(data: UserData) {
    const apiUrl = this.dominio + 'iniciar_sesion';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Inicio de sesión exitoso
        console.table(response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error al iniciar sesión:', error);

        // Manejar errores de inicio de sesión
      }
    );
  }

  registrarUsuario(data: UserData) {
    const apiUrl = this.dominio + 'registrar_usuario';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Registro exitoso
        console.table(response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error al registrar el usuario:', error);

        // Manejar errores de registro
      }
    );
  }

  cerrarSesion() {
    alert('Sesion cerrada');
    this.router.navigate(['/login']);
    // TODO
  }
}
