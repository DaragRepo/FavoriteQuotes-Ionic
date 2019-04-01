import { QuotesService } from './../../services/quotes';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})

export class QuotePage {
  person: string ; 
  text: string ; 
  // view controller controls the currently active(visible) view(this page) or page while navController controls our stack of pages 
 constructor(private viewController: ViewController,private navParams: NavParams,private quoteService: QuotesService){}





  ionViewDidLoad(){
   this.person  = this.navParams.get('person');
   this.text = this.navParams.get('text');
  }


  onClose(remove = false) {
    this.viewController.dismiss(remove);
  }






}