import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard'

// Vistas
import { HomeComponent } from './vistas/home/home.component';
import { IniciarSesionComponent } from './vistas/login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './vistas/login/registrar/registrar.component';
import { CanalTextoComponent } from './vistas/comunidad/canal-texto/canal-texto.component';
import { CanalAudioComponent } from './vistas/comunidad/canal-audio/canal-audio.component';
import { CanalVideoComponent } from './vistas/comunidad/canal-video/canal-video.component';

// Layouts
import { LayoutPrincipalComponent } from './layouts/layout-principal/layout-principal.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';

// 404
import { PaginaNoEncontradaComponent } from './vistas/pagina-no-encontrada/pagina-no-encontrada.component';


const redireccionarlogin = () => redirectUnauthorizedTo(['login']);
const redireccionarhome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redireccionarhome },
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
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redireccionarlogin },
    component: LayoutPrincipalComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'comunidad/nombreCanalTexto', component: CanalTextoComponent
      },
      {
        path: 'comunidad/nombreCanalAudio', component: CanalAudioComponent
      },
      {
        path: 'comunidad/nombreCanalVideo', component: CanalVideoComponent
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
