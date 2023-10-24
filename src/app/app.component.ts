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
  }
}
