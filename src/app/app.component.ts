import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  logueado = false;

  constructor(
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    initFlowbite();

    // Verificar si el usuario esta logueado
    this.auth.onAuthStateChanged(user => {
      if (user && user.email) {
        // Si el usuario esta logueado
        this.logueado = true;
      } else {
        console.log('No logueado (AppComponent)');
      }
    });
  }
}
