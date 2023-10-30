import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';
import { ComunidadService } from 'src/app/servicios/comunidad/comunidad.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  usuario = this.ServicioAutenticacion.usuario.value;

  mostrarCanales: boolean = true;
  comunidades: any = [];

  constructor(
    private ServicioAutenticacion: AutenticacionService,
    private comunidadService: ComunidadService,
    private router: Router
  ) {
    const routeUrl = this.router.url;
    const comunidadMatch = routeUrl.match(/\/([^\/]+)/); // Buscar el valor de :comunidad en la URL

    if (comunidadMatch) {
      const comunidad = comunidadMatch[1];

      if (comunidad === 'home') {
        this.mostrarCanales = false;
      }
    }
  }

  ngOnInit() {
    // SIN LOCALSTORAGE Guarda las comunidades en un array para iterar sobre ellas en el HTML
    this.comunidadService.obtenerComunidades().subscribe(
      response => {
        this.comunidades = response;
      },
      error => {
        console.error('Error al obtener las comunidades:', error);
      }
    );
  }

  cerrarSesion() {
    this.ServicioAutenticacion.cerrarSesion();
  }
}

