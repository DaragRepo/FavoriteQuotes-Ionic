import { Quote } from './../data/quote.interface';



export class QuotesService {
    //empty array without the type
    // private favoriteQuotes = [];
    //with the type
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites (quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites (quote: Quote) {
        // get position first
       const position = this.favoriteQuotes.findIndex( (quoteEl: Quote) => {
        return quoteEl.id == quote.id;
       });
       // then remove the specified position 
       this.favoriteQuotes.splice(position , 1);
    }
    getFavoriteQuotes () {
        // we used slice for privacy issues we don't want anyone from the outside to modify the real array so we returned a copy of it 
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite (quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }

}