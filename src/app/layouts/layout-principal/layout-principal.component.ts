import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent {
  usuarioLogueado$ = new BehaviorSubject<boolean | null>(null);

  constructor(
    private router: Router,
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  ngOnInit() {
    // Verificar si el usuario esta logueado
    this.ServicioAutenticacion.obtenerEstadoAutenticacion().subscribe((user) => {
      if (user && user.email) {
        // Si el usuario esta logueado
        this.usuarioLogueado$.next(true);
      } else {
        console.log('No logueado (AppComponent)');
        this.router.navigate(['/login']);
      }
    });

  }
}
