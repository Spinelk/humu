import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AutenticacionService } from './servicios/firebase/autenticacion/autenticacion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  dominio: string = 'http://127.0.0.1:8000/';

  constructor(
    private SerivicioAutenticacion: AutenticacionService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    initFlowbite();

    this.http.get(this.dominio +'get_csrf_token').subscribe((data: any) => {
      const csrfToken = data.csrf_token;
      localStorage.setItem('csrfToken', csrfToken);
    });
  }
}
