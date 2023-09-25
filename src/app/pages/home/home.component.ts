import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cuenta = 0;
  mensaje = 'No Autorizado';

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Home: Usuario registrado');
        this.mensaje = 'Bienvenido';
        return;
      }
    });
  }

  async cerrarSesion() {
    // Cerrar sesion con firebase
    this.auth.signOut().then(() => {
      alert('Sesion cerrada');
      // this.router.navigate(['/home']);
      window.location.reload();
    }
    ).catch((error) => {
      // Manejar el error
      alert('Error al cerrar sesion');
      console.log('Error al cerrar sesion');
    }
    );
  }
}
