import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent implements OnInit {
  mostrarCanales: boolean = true;


  constructor(
    private router: Router,
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

  ngOnInit(): void {
    initFlowbite();
  }

}
