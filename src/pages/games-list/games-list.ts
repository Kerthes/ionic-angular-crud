import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { GameProvider } from '../../providers/game/game';
import { GameNewPage } from './game-new/game-new';
import { GamePage } from './game/game';

@IonicPage()
@Component({
  selector: 'page-games-list',
  templateUrl: 'games-list.html',
})
export class GamesListPage {

  public games: any = [];
  gameSubscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Game: GameProvider
  ) {}

  ngOnInit(){
    this.gameSubscription = this.Game.gameSubject.subscribe((listGame) => {
      console.log(listGame)
      this.games = listGame;
    })
  }

  /**
   * Go on a page who show details of a game
   * @param gameName 
   * @param _id 
   */
  onGoToGame(gameName: string, _id: string){
    this.navCtrl.push(GamePage, {name: gameName, id: _id});
  }

  /**
   * Go on a page for create a new game
   */
  onGoToCreate(){
    this.navCtrl.push(GameNewPage);
  }
}
