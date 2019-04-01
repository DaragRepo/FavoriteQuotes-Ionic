import { QuotesService } from './../../services/quotes';
import { NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
// if we want to use the onInit method implement onInit interface 
export class QuotesPage {

  quoteGroup: {category: string , quotes: Quote[] , icon: string };
  constructor(private navParams: NavParams, private alertCtrl: AlertController ,private quotesService: QuotesService){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add this quote to your favorites ?',
      enableBackdropDismiss: false , 
      cssClass: 'customCss',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        } , 
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
           console.log("Cancel");
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite (quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  // ngOnInit() {
  //   this.quoteGroup = this.navParams.data;
  // }


  // ionViewDidLoad(){
  //  this.quoteGroup = this.navParams.data ;
  // } // Add elvis operator (?) in the template to use this approache 


}