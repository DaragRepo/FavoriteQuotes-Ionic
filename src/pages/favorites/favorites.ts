import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { ModalController } from 'ionic-angular';
import { ToggleService } from '../../services/Toggle';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favorites: Quote[];
  constructor(private quoteServices:QuotesService, private modalCtrl: ModalController, private toggleService: ToggleService){}
 ionViewWillEnter(){
  this.favorites = this.quoteServices.getFavoriteQuotes();
 }

 onViewQuote(quote: Quote) {
 const modal =  this.modalCtrl.create(QuotePage,quote);
 modal.present();
 modal.onDidDismiss((remove: boolean) => {
    if (remove) {
      this.onDeleteQuote(quote);
    //   const position = this.favorites.findIndex((quoteEl: Quote) => {
    //     return quoteEl.id == quote.id ;
    //   });
    // this.favorites.splice(position , 1);
    
    }  

});


 }

 onDeleteQuote(qoute: Quote) {
  this.quoteServices.removeQuoteFromFavorites(qoute);
  this.favorites = this.quoteServices.getFavoriteQuotes();
  console.log(this.toggleService.getState());
 }
 getBackground() {
   return this.toggleService.getState() ? 'altQuoteBackground' : 'quoteBackground';
 }


 isAltBackground() {
   return this.toggleService.getState();
 }


}
