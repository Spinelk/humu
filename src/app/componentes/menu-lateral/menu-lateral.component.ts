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
  usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  comunidades: any = [];

  nombreUsuario: string = this.usuario.usuario;
  correoUsuario: string = this.usuario.correo;
  inicialUsuario: string = this.nombreUsuario.charAt(0).toUpperCase();
  constructor(
    private ServicioAutenticacion: AutenticacionService,
    private comunidadService: ComunidadService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // SIN LOCALSTORAGE Guarda las comunidades en un array para iterar sobre ellas en el HTML
    this.comunidadService.obtenerComunidades().subscribe(
      response => {
        console.log(response);
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

