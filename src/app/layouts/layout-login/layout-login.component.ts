import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-layout-login',
  templateUrl: './layout-login.component.html',
  styleUrls: ['./layout-login.component.css']
})
export class LayoutLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private ServicioAutenticacion: AutenticacionService,
  ) { }

  ngOnInit() {
    // Redirigir a principal si ya hay un usuario logeado
    this.ServicioAutenticacion.obtenerEstadoAutenticacion().subscribe((user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
    });
  }
}
