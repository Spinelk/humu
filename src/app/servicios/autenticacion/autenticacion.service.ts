import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


export interface UserData {
  nombreUsuario: string;
  correo?: string;
  contrasena: string;
  verificadorContrasena?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  dominio: string = environment.dominioBackend;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {

  }

  iniciarSesion(data: UserData) {    
    const apiUrl = this.dominio + 'iniciar_sesion';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Inicio de sesión exitoso
        // console.table(response);
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
    const apiUrl = this.dominio + 'registrar_usuario';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Registro exitoso
        // console.log(response);
        this.iniciarSesion(data);
      },
      error => {
        console.error('Error al registrar el usuario:', error);

        // Manejar errores de registro
      }
    );
  }

  eliminarCuenta(data: UserData) {
    const apiUrl = this.dominio + 'eliminar_usuario';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, data, { headers, withCredentials:true }).subscribe(
      response => {
        // Eliminación exitosa
        // console.log(response);
        alert('Cuenta eliminada');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al eliminar el usuario:', error);

        // Manejar errores de eliminación
      }
    );
  }

  cerrarSesion() {
    alert('Sesion cerrada');
    this.router.navigate(['/login']);
    // TODO
  }
}
