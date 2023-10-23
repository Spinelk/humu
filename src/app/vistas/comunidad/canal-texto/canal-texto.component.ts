import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Message {
  name: string; // Agrega la propiedad 'name'
  text: string; // texto del mensaje
  fecha_hora: string; // fecha y hora del mensaje
  isEditing: boolean; 
  editedText: string;
}

@Component({
  selector: 'app-canal-texto',
  templateUrl: './canal-texto.component.html',
  styleUrls: ['./canal-texto.component.css']
})
export class CanalTextoComponent {
  messages: Observable<Message[]> | undefined;
  messageInput: string = '';
  userEmail: string = '';
  nameInput: string = '';
  private dbMessages: AngularFireList<any>;
  editingMessage: Message | null = null;

  constructor(
    private db: AngularFireDatabase,
    private authService: AngularFireAuth
  ) {
    this.dbMessages = db.list('mensaje');

    // #Verifica el estado de autenticación del usuario actual
    this.authService.authState.subscribe((user) => {
      // #Obtén el correo electrónico del usuario actual
      this.userEmail = user?.email || '';

      // #Obtén los mensajes de la base de datos
      this.messages = this.dbMessages.valueChanges().pipe(
        map((messages) => {
          return messages.map((message) => {
            // #Establece 'Anónimo' como nombre si no se proporciona un nombre
            if (message.name && message.name.trim() !== 'Anónimo') {
              return message; // Mantén el mensaje tal como está
            } else {
              message.name = 'Anónimo'; // Establece 'Anónimo' como nombre si no se proporciona un nombre
              return message;
            };
          });
        })
      );
    });
  }

  sendMessage(message: string, name: string) {
    // #Establece el correo electrónico del usuario actual como nombre
    const displayName = name.trim() === '' ? this.userEmail : name;

    const fecha = new Date();

    // #Agrega el mensaje a la base de datos
    this.dbMessages.push({ name: displayName, text: message, fecha_hora: fecha.toLocaleString() });
    // #Restablece el campo de entrada de mensaje
    this.messageInput = '';
    // #Restablece el campo de entrada de nombre
    this.nameInput = '';
  }
}