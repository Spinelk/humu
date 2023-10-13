import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent implements OnInit {

constructor() { }

  ngOnInit(): void {
    initFlowbite();
  }

}
