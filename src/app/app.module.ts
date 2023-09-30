// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Vistas
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

// Componenentes
import { LayoutComponent } from './pages/layout/layout.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { ListaComunidadesComponent } from './componentes/menu-lateral/lista-comunidades/lista-comunidades.component';

// Environment
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    // Vistas
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,

    // Componenentes
    LayoutComponent,
    MenuLateralComponent,
    NavbarComponent,
    ListaComunidadesComponent
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