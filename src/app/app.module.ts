// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Vistas
import { AppComponent } from './app.component';
import { HomeComponent } from './vistas/home/home.component';
import { IniciarSesionComponent } from './vistas/login/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './vistas/login/registrar/registrar.component';

// Layouts
import { LayoutPrincipalComponent } from './layouts/layout-principal/layout-principal.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';

// Componenentes
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { ListaComunidadesComponent } from './componentes/menu-lateral/lista-comunidades/lista-comunidades.component';

// Environment
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { PaginaNoEncontradaComponent } from './vistas/pagina-no-encontrada/pagina-no-encontrada.component';



@NgModule({
  declarations: [
    // Vistas
    AppComponent,
    HomeComponent,
    IniciarSesionComponent,
    RegistrarComponent,

    // Componenentes
    MenuLateralComponent,
    NavbarComponent,
    ListaComunidadesComponent,
    PaginaNoEncontradaComponent,

    // Layouts
    LayoutPrincipalComponent,
    LayoutLoginComponent,
  ],
  imports: [
    // Angular
    BrowserModule, AppRoutingModule, FormsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }