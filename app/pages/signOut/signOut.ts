
import {Page} from 'ionic-angular';
import {NavController,Storage, LocalStorage} from 'ionic-angular';
import {AuthenticatePage} from '../authenticate/authenticate';
import {OnInit} from 'angular2/core';
@Page({
    templateUrl:'build/pages/signOut/signOut.html'
})
export class SignoutCompoent implements OnInit{
    logo:any;
    local:any;
    constructor(private nav:NavController){
        this.local = new Storage(LocalStorage);
        this.logo = 'img/logo.png';
        
    }
    ngOnInit(){
        this.local.remove('token');
        this.nav.setRoot(AuthenticatePage);
    }
}