import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-canal-video',
  templateUrl: './canal-video.component.html',
  styleUrls: ['./canal-video.component.css']
})
export class CanalVideoComponent implements OnInit {
  usuario = this.ServicioAutenticacion.usuario.value;

  comunidad: string | undefined;
  nombreSala: string | undefined;


  constructor(
    private renderer: Renderer2,
    private router: Router,
    private ServicioAutenticacion: AutenticacionService,
    ) { 
    const routeUrl = this.router.url;
    const comunidadMatch = routeUrl.match(/\/([^\/]+)/); // Buscar el valor de :comunidad en la URL

    if (comunidadMatch) {
      this.comunidad = comunidadMatch[1];
    }

    this.nombreSala = this.comunidad + 'fe3w6ChkvCEQ4!';
  }

  ngOnInit() {
    const interfaceConfig = {
      TOOLBAR_BUTTONS: [
        'microphone',
        'camera',
        'closedcaptions',
        'desktop',
        'fullscreen',
        'fodeviceselection',
        'hangup',
        'profile',
        'chat',
        'recording',
        'livestreaming',
        'etherpad',
        'settings',
        'raisehand',
        'videoquality',
        'filmstrip',
        'invite',
        'feedback',
        'stats',
        'shortcuts',
        'tileview',
        'videobackgroundblur',
        'download',
        'help',
        // 'mute-everyone',
        'e2ee'
      ],
      SETTINGS_SECTIONS: [
        'devices',
        'language',
        'moderator',
        'profile'
      ],
      SHOW_CHROME_EXTENSION_BANNER: false
    };

    const domain = 'meet.jit.si';
    const options = {
      roomName: this.nombreSala,
      width: '100%',
      parentNode: document.querySelector('#meet'),
      userInfo: {
        email: this.usuario.correo,
        displayName: this.usuario.usuario,
      },
      lang: 'es',
      noSsl: true,
      interfaceConfigOverwrite: interfaceConfig
    };
    const api = new JitsiMeetExternalAPI(domain, options);


    const iframe = document.querySelector('iframe');
    this.renderer.addClass(iframe, 'tamaño-iframe')
  }

}
