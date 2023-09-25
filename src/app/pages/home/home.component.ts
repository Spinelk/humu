import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

    }
    ).catch((error) => {
      // Manejar el error
      alert('Error al cerrar sesion');
      console.log('Error al cerrar sesion');
    }
    );
  }
}
