import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Pesquisar Previsões',
      url: '/home',
      icon: 'clock'
    },
    {
      title: 'Pesquisar Linha',
      url: '/pesq-linha',
      icon: 'search'
    },
    {
      title: 'Pesquisar Pontos',
      url: '/pesq-ponto',
      icon: 'map'
    },
    {
      title: 'Ler QR Code',
      url: '/home',
      icon: 'barcode'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
