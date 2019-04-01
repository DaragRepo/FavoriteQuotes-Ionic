import { Toggle } from 'ionic-angular/umd';




export class ToggleService {

    private state: boolean = false ;
    setState (state: boolean) {
        this.state = state ;
    }
    getState () {
        return this.state ; 
    }


}