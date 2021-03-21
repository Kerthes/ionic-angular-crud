
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { GamesListPage } from '../games-list/games-list';
import { HomePage } from '../home/home';
import { PhotosPage } from '../photos/photos';

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  home = HomePage;
  games = GamesListPage;
  about = AboutPage;
  photo = PhotosPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
