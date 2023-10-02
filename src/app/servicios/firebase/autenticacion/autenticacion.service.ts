import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

// firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
  ) {
  }

  // Iniciar sesión con correo y contraseña  | : Promise<UserCredential>
  iniciarSesionConCorreo(correo: string, contrasena: string) {
    return this.afAuth.signInWithEmailAndPassword(correo, contrasena).then((userCredential) => {
      // Inicio de sesión exitoso
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']);
      console.table(userCredential.user?.providerData);
    }).catch((error) => {
      console.error('Error al iniciar sesión:', error);

      // Manejar errores de inicio de sesión
      const codigoError = error.code;
      switch (codigoError) {
        case "auth/email-already-in-use":
          alert("El correo ya está en uso. Intenta con otro.");
          break;
        case "auth/missing-email":
          alert("Debe ingresar un correo. Por favor, intenta de nuevo.");
          break;
        case "auth/invalid-email":
          alert(
            "El correo no es válido. Ingresa una direccion de correo válida."
          );
          break;
        case "auth/missing-password":
          alert("Debe ingresar una contraseña. Por favor, intenta de nuevo.");
          break;
        case "auth/weak-password":
          alert(
            "La contraseña es muy débil. Debe tener al menos 6 caracteres."
          );
          break;
        default:
          alert(
            "Hubo un error al crear la cuenta. Por favor, intenta de nuevo más tarde."
          );
      }
    });
  }

  registrarUsuarioConCorreo(correo: string, contrasena: string) {
    return this.afAuth.createUserWithEmailAndPassword(correo, contrasena)
      .then((userCredential) => {
        // Registro exitoso
        alert('Usuario registrado');
        this.router.navigate(['/home']);
        console.table(userCredential.user?.providerData);
        // ir a la página de inicio
        this.router.navigate(['/home']);
      }).catch((error) => {
        console.error('Error al registrar el usuario:', error);

        // Manejar errores de registro
        const codigoError = error.code;
        switch (codigoError) {
          case "auth/invalid-email":
            alert(
              "El correo no es válido. Ingresa una direccion de correo válida."
            );
            break;
          case "auth/missing-password":
            alert("Debe ingresar una contraseña. Por favor, intenta de nuevo.");
            break;
          case "auth/invalid-login-credentials":
            alert("Credenciales no válidas. Verifica tus credenciales.");
            break;
          default:
            alert(
              "Hubo un error al iniciar sesión. Por favor, intenta de nuevo más tarde."
            );
        }
      });
  }

  cerrarSesion() {
    return this.afAuth.signOut();
  }

  obtenerEstadoAutenticacion() {
    return this.afAuth.authState;
  }
}
