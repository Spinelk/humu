import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-canal-video',
  templateUrl: './canal-video.component.html',
  styleUrls: ['./canal-video.component.css']
})
export class CanalVideoComponent implements OnInit {
  usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  comunidad: string | undefined;
  nombreSala: string | undefined;

  nombreUsuario: string = this.usuario.usuario;
  correoUsuario: string = this.usuario.correo;

  constructor(
    private renderer: Renderer2,
    private router: Router,
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
        email: this.correoUsuario,
        displayName: this.nombreUsuario,
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
