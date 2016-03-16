import {Page, Alert, NavController,MenuController} from 'ionic-angular';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
import {GetQuotePage} from '../getquote/getquote';
@Page({
    templateUrl:"build/pages/home/home.html",
    providers:[EcmService]
})
export class HomePage{
    logo:any;
    nav:any;
    constructor(nav: NavController,private menu: MenuController){
        this.nav = nav;
        this.logo = 'img/logo.png';
        this.menu.enable(true);
    }
    
    setRoot(Component){
        if(Component == 'GetQuote'){
            this.nav.push(GetQuotePage);
        }
    }
}