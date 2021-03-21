import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../../providers/game/game';

@IonicPage()
@Component({
  selector: 'page-game-new',
  templateUrl: 'game-new.html',
})
export class GameNewPage {

  public game: any = {
    name: null,
    description: null,
    difficulty: null,
    image: null,
    player: null,
    rules: null
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private Game: GameProvider
  ) {}

  /**
   * Call the function who add a game in db
   */
  onAdd(){
    this.Game.saveNewGame(this.game).subscribe(()=>{
      this.game = {
        name: null,
        description: null,
        difficulty: null,
        image: null,
        player: null,
        rules: null
      };
    })
    this.navCtrl.pop();
  }
}
