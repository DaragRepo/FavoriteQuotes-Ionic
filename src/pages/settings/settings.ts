import { ToggleService } from './../../services/Toggle';
import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular/umd';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private toggleService: ToggleService){}
  // toggle is an event type class that's why we used $event ionic 2 gives
  onToggle(toggle: Toggle) {
    this.toggleService.setState(toggle.checked);
  }
  getState() {
    return this.toggleService.getState();
  }
  

}
