import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Vistas Login
import { IniciarSesionComponent } from './vistas/login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './vistas/login/registrar/registrar.component';
// Vistas Home
import { HomeComponent } from './vistas/home/home.component';
// Vistas comunidad
import { CanalTextoComponent } from './vistas/comunidad/canal-texto/canal-texto.component';
import { CanalAudioComponent } from './vistas/comunidad/canal-audio/canal-audio.component';
import { CanalVideoComponent } from './vistas/comunidad/canal-video/canal-video.component';

import { ConfiguracionComponent } from './vistas/configuracion/configuracion.component';


// Layouts
import { LayoutPrincipalComponent } from './layouts/layout-principal/layout-principal.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';
import { LayoutConfiguracionComponent } from './layouts/layout-configuracion/layout-configuracion.component';

// 404
import { PaginaNoEncontradaComponent } from './vistas/pagina-no-encontrada/pagina-no-encontrada.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      {
        path: 'login', component: IniciarSesionComponent
      },
      {
        path: 'signup', component: RegistrarComponent
      },
    ],
  },
  {
    path: '',
    component: LayoutPrincipalComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
    ],
  },
  {
    path: ':comunidad',
    component: LayoutPrincipalComponent,
    children: [
      {
        path: '', redirectTo: 'canal-texto', pathMatch: 'full' // Esto corresponde a ':comunidad' solo
      },
      {
        path: 'canal-texto', component: CanalTextoComponent
      },
      {
        path: 'canal-audio', component: CanalAudioComponent
      },
      {
        path: 'canal-video', component: CanalVideoComponent
      },
    ],
  },
  {
    path: '',
    component: LayoutConfiguracionComponent,
    children: [
      {
        path: 'configuracion', component: ConfiguracionComponent
      },
    ],
  },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
