import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent {
  logueado = false;

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Verificar si el usuario esta logueado
    this.auth.onAuthStateChanged(user => {
      if (user && user.email) {
        // Si el usuario esta logueado
        this.logueado = true;
      } else {
        console.log('No logueado (AppComponent)');
        this.router.navigate(['/login']);
      }
    });
  }
}
