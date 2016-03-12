import {Page, Alert, NavController} from 'ionic-angular';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
@Page({
    templateUrl:"build/pages/home/home.html",
    providers:[EcmService]
})
export class HomePage{
    logo:any;
    constructor(){
         this.logo = 'img/logo.png';
    }
}