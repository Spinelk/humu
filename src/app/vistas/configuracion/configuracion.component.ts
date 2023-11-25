import { Component } from '@angular/core';
import { AutenticacionService, UserData } from 'src/app/servicios/autenticacion/autenticacion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  userData: UserData = {
    nombreUsuario: JSON.parse(localStorage.getItem('usuario') || '{}').usuario,
    contrasena: ''
  };

  constructor(
    private ServicioAutenticacion: AutenticacionService,
  ) { }


  eliminarCuenta() {
    this.ServicioAutenticacion.eliminarCuenta(this.userData);
  }
}
