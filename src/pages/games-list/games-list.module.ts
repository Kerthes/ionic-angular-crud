import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamesListPage } from './games-list';

@NgModule({
  declarations: [
    GamesListPage,
  ],
  imports: [
    IonicPageModule.forChild(GamesListPage),
  ],
})
export class GamesListPageModule {}
