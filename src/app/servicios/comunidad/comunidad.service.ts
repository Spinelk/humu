import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  dominio: string = environment.dominioBackend;

  constructor(
    private http: HttpClient,
  ) { }


  obtenerComunidades() {
    const apiUrl = this.dominio + 'obtener_comunidades';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get(apiUrl, { headers });
  }
}
