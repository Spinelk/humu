import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout-configuracion',
  templateUrl: './layout-configuracion.component.html',
  styleUrls: ['./layout-configuracion.component.css']
})
export class LayoutConfiguracionComponent {
  constructor(private location: Location) { }

  volver() {
      this.location.back();
  }
}
