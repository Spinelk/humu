import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  dominio: string = environment.dominioBackend;

  public comunidades = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('comunidades') || '{}'
    ));

  constructor(
    private http: HttpClient,
  ) { }


  actualizarListaComunidades() {
    const apiUrl = this.dominio + 'obtener_comunidades';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.get(apiUrl, { headers }).subscribe(
      response => {
        // Obtener comunidades exitoso
        // console.table(response);
        this.comunidades.next(response);
        localStorage.setItem('comunidades', JSON.stringify(response))
      },
      error => {
        console.error('Error al obtener las comunidades:', error);

        // Manejar errores al obtener las comunidades
      }
    );
  }
}
