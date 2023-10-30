import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ComunidadService } from '../comunidad/comunidad.service';


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

  // obtener el usuario del localstorage
  public usuario = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('usuario') || '{}'
    ));


  constructor(
    private router: Router,
    private http: HttpClient,
    private servicioComunidad: ComunidadService,
  ) {

  }

  iniciarSesion(data: UserData) {
    const apiUrl = this.dominio + 'iniciar_sesion';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, data, { headers }).subscribe(
      response => {
        // Inicio de sesión exitoso
        // console.table(response);
        this.usuario.next(response);
        localStorage.setItem('usuario', JSON.stringify(response));
        this.servicioComunidad.actualizarListaComunidades();
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

    this.http.post(apiUrl, data, { headers, withCredentials: true }).subscribe(
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
    // Eliminar información del usuario del localstorage
    localStorage.removeItem('usuario');
    localStorage.removeItem('comunidades');

    alert('Sesion cerrada');
    this.router.navigate(['/login']);
    // TODO
  }
}
