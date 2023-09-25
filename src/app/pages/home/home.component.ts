import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cuenta = 0;
  mensaje = '';
  correo = '';
  usuarioLogueado$ = new BehaviorSubject<boolean | null>(null);

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
    // Verificar si el usuario esta logueado
    this.auth.onAuthStateChanged(user => {
      if (user && user.email) {
        // Si el usuario esta logueado
        this.mensaje = 'Bienvenido';
        this.correo = user.email;
        this.usuarioLogueado$.next(true);
      } else {
        this.mensaje = 'No Autorizado';
        this.usuarioLogueado$.next(false);
      }
    });
  }

  async cerrarSesion() {
    // Cerrar sesion con firebase
    try {
      await this.auth.signOut();
      alert('Sesion cerrada');
      this.usuarioLogueado$.next(false);
    } catch (error) {
      // Manejar el error
      alert('Error al cerrar sesion');
      console.log('Error al cerrar sesion');
    }
  }
}
