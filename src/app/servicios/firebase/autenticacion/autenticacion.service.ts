import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


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
    private router: Router,
    private http: HttpClient,
  ) {

  }

  iniciarSesion(data: UserData) {
    const tokenCSRF = localStorage.getItem('csrfToken');
    if (!tokenCSRF) {
      console.error('No se ha encontrado el token CSRF');
      return;
    }
    const apiUrl = this.dominio + 'iniciar_sesion';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': tokenCSRF });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Inicio de sesión exitoso
        console.table(response);
        localStorage.setItem('usuario', JSON.stringify(response));
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error al iniciar sesión:', error);

        // Manejar errores de inicio de sesión
      }
    );
  }

  registrarUsuario(data: UserData) {
    const tokenCSRF = localStorage.getItem('csrfToken');
    if (!tokenCSRF) {
      console.error('No se ha encontrado el token CSRF');
      return;
    }
    const apiUrl = this.dominio + 'registrar_usuario';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': tokenCSRF });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Registro exitoso
        console.log(response);
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
