import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ListaComunidadesComponent } from './componentes/menu-lateral/lista-comunidades/lista-comunidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    MenuLateralComponent,
    NavbarComponent,
    ListaComunidadesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
