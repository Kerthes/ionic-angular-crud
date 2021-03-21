import { TabPageModule } from './../pages/tab/tab.module';
import { AboutPageModule } from './../pages/about/about.module';
import { GamesListPageModule } from './../pages/games-list/games-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GameNewPageModule } from '../pages/games-list/game-new/game-new.module';
import { GamePageModule } from '../pages/games-list/game/game.module';
import { GameProvider } from '../providers/game/game';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PhotosPageModule } from '../pages/photos/photos.module';
import { Camera } from '@ionic-native/camera';

const firebase = {
  apiKey: "AIzaSyAYNPpOaUt2gSu81iQZBsYKKOisljRLJBc",
  authDomain: "angular-game-a5871.firebaseapp.com",
  projectId: "angular-game-a5871",
  storageBucket: "angular-game-a5871.appspot.com",
  messagingSenderId: "606030526643",
  appId: "1:606030526643:web:b41220e152144e258758c6"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GamesListPageModule,
    AboutPageModule,
    TabPageModule,
    GameNewPageModule,
    GamePageModule,
    PhotosPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameProvider,
    Camera
  ]
})
export class AppModule {}
