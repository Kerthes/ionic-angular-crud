import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GameProvider {

  private games: any =[];
  gameSubject = new Subject<any[]>();

  constructor(private db : AngularFirestore) 
  {
    this.getAllGames();
  }

  emitGameSubject(){
    this.gameSubject.next(this.games.slice());
  }

  getGameById(id: number){
    for(const game of this.games){
      if(game.id == id ) return game;
    }
  }

  saveNewGame(game:any){
    return new Observable(obs => {
      this.db.collection('game').add(game).then(()=> {
        console.log('success');
        obs.next;
      })
    })
  }

  getAllGames(){
    return this.db.collection('game').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          }
        })
      })
    ).subscribe(res => {
      this.games = res;
      this.emitGameSubject();
    })
  }

  update(game: any, id:any){
    return new Observable(obs => {
      this.db.doc(`game/${id}`).update(game);
      obs.next();
    })
  }

  delete(id: any){
    this.db.doc(`game/${id}`).delete();
  }
}
