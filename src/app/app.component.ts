import { Component } from '@angular/core';
import { Environment } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public appPages = [
    {
      title: '¿Qué hacer en el Jardín?',
      url: '/institucional',
      icon: 'document'
    },
    {
      title: 'Horarios',
      url: '/tarifas-horarios',
      icon: 'clock'
    },
    {
      title: 'Parqueadero',
      url: '/parqueadero',
      icon: 'logo-model-s' 
    },
    {
      title: 'Recomendaciones',
      url: '/recomendaciones',
      icon: 'warning' 
    },
    {
      title: 'Restaurantes',
      url: '/restaurantes',
      icon: 'restaurant'
    },
    {
      title: 'Espacios para eventos',
      url: '/eventos',
      icon: 'calendar'
    }
  ];

  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
     
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(2000).subscribe(() => this.showSplash = false)

      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDGODufigYaWvP-Lg2nmzoRkKd3QbqUsR0',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDGODufigYaWvP-Lg2nmzoRkKd3QbqUsR0'
      });
    });
  }
}
