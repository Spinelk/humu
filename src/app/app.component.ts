import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AutenticacionService } from './servicios/firebase/autenticacion/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  constructor(
    private SerivicioAutenticacion: AutenticacionService,
  ) { }

  ngOnInit(): void {
    initFlowbite();
  }
}
