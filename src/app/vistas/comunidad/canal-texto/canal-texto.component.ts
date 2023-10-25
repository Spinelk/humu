import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

export interface Message {
  name: string;
  text: string;
  fecha_hora: string;
}

@Component({
  selector: 'app-canal-texto',
  templateUrl: './canal-texto.component.html',
  styleUrls: ['./canal-texto.component.css']
})
export class CanalTextoComponent implements OnInit {

  messages: Observable<Message[]> | undefined;
  messageInput: string = '';
  private dbMessages: AngularFireList<any>;

  usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  nombreUsuario: string = this.usuario.usuario;

  comunidad: string | undefined;

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
  ) {
    const routeUrl = this.router.url;
    const comunidadMatch = routeUrl.match(/\/([^\/]+)/); // Buscar el valor de :comunidad en la URL

    if (comunidadMatch) {
      this.comunidad = comunidadMatch[1];
    }
    
    // Obtiene los mensajes de la base de datos
    this.dbMessages = this.db.list(this.comunidad || 'mensaje');
    this.mostrarMensajes();
  }

  ngOnInit() {

  }
  mostrarMensajes() {
    // Mapea los mensajes a un arreglo de mensajes
    this.messages = this.dbMessages.valueChanges().pipe(
      map((messages) => {
        return messages.map((message) => {
          // Establece 'Anónimo' como nombre si no se proporciona un nombre
          if (!message.name) {
            message.name = 'Anónimo';
          };
          return message;
        });
      })
    );
  }


  sendMessage(message: string) {
    const displayName = this.nombreUsuario;
    const fecha = new Date();

    // Agrega el mensaje a la base de datos
    this.dbMessages.push({ name: displayName, text: message, fecha_hora: fecha.toLocaleString() });

    // Restablece el campo de entrada de mensaje
    this.messageInput = '';
  }
}