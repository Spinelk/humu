import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { HttpClient } from '@angular/common/http';

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
  dominio: string = 'http://127.0.0.1:8000/';
  // 

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    initFlowbite();

    this.http.get(this.dominio +'get_csrf_token').subscribe((data: any) => {
      const token = data.csrf_token;
      const fechaCreacion= new Date().toISOString();

      const tokenCSRF: token = {
        tokenCSRF: token,
        fechaCreacion: fechaCreacion
      };
      
      console.table(tokenCSRF);
      localStorage.setItem('tokenCSRF', JSON.stringify(tokenCSRF));
    });
  }
}
