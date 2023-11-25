import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router } from '@angular/router';

interface token {
  tokenCSRF: string;
  fechaCreacion: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
    initFlowbite();
    
    // si no se encuentra el usuario en el localstorage, se redirige a la página de inicio de sesión
    if (!localStorage.getItem('usuario')) {
      this.router.navigate(['/login']);
    }
  }
}
