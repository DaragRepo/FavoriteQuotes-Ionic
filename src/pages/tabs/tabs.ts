import { IonicPage } from 'ionic-angular';
import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';




@IonicPage()
@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs selectedIndex="0">
  
  <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
  <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="ios-book"></ion-tab>
  </ion-tabs>
  
  `
})
export class TabsPage {
  favoritesPage = FavoritesPage; 
  libraryPage   = LibraryPage;
}
