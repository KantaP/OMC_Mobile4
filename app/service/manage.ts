import {Component,Injectable} from 'angular2/core';
import {NavController,Storage, LocalStorage} from 'ionic-angular';
import {AuthenticatePage} from '../pages/authenticate/authenticate';
@Injectable()
export class ManageWeb{
    local:any;
    constructor(private nav:NavController){
        this.local = new Storage(LocalStorage);
    }
    signOut(){
        this.local.remove('token');
        this.nav.setRoot(AuthenticatePage);
    }
}