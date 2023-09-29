import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { initFlowbite } from 'flowbite';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  
  usuarioLogueado$ = new BehaviorSubject<boolean | null>(null);
  correo = '';

  constructor(
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    initFlowbite();

    // Verificar si el usuario esta logueado
    this.auth.onAuthStateChanged(user => {
      if (user && user.email) {
        // Si el usuario esta logueado
        this.correo = user.email;
        this.usuarioLogueado$.next(true);
      } else {
        this.usuarioLogueado$.next(false);
      }
    });
  }
}
