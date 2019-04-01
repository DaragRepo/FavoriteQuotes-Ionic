import { QuotesService } from './../services/quotes';
import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';
import { LibraryPage } from './../pages/library/library';
import { FavoritesPage } from './../pages/favorites/favorites';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToggleService } from '../services/Toggle';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage ,
    LibraryPage , 
    QuotePage , 
    QuotesPage , 
    SettingsPage ,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage ,
    LibraryPage , 
    QuotePage , 
    QuotesPage , 
    SettingsPage ,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} , 
    // to use the same array across all the application
    QuotesService , 
    ToggleService
  ]
})
export class AppModule {}
