import { IonicPage } from 'ionic-angular';
import { QuotePage } from './../quote/quote';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';



@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  
quoteCollction: {category: string , quotes: Quote[] , icon: string }[];

quotesPage = QuotesPage;

ngOnInit(): void {
  this.quoteCollction = quotes;
}


}
