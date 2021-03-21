import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameProvider } from '../../../providers/game/game';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage implements OnInit {

  modif: boolean = false;
  public name: string;
  public id: number;
  public game: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Game: GameProvider,
    private Toast: ToastController,
    public alertCtrl : AlertController,
    ) {}

    ngOnInit(){
      this.navCtrl = this.navParams.get('name');
      this.id = this.navParams.get('id');
      this.game = this.Game.getGameById(this.id);
    }

    /**
     * Call the function who update in db
     */
    onModif(){
      this.Game.update(this.game.data, this.game.id).subscribe(() =>{
        const toast = this.Toast.create({
          message: "Vos changement ont été sauvegardés",
          duration: 2000
        });
        toast.present();
        this.modif = false;
      })
    }
    
    /**
     * Call the function who delete in db
     */
    onDelete(){
      this.Game.delete(this.game.id);
      this.navCtrl.pop();
    }
  
    /**
     * alert the user before he can update a game
     */
    onGoAccessModif(){
      let alert = this.alertCtrl.create({
        title: "Etes-vous sur de vouloir modifier ?",
        subTitle: "Vous rendrez possible la modification",
        buttons: [
          {
            text: "Annuler",
            role: "Cancel"
          },
          {
            text: "Confirm",
            handler: () => { this.modif = !this.modif}
          },
        ]
      });
  
      alert.present();
    }
}
