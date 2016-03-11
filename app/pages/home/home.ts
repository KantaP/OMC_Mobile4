import {Page, Alert, NavController} from 'ionic-angular';
import {OmcService} from '../../service/omc';
import {forwardRef} from 'angular2/core';
@Page({
    templateUrl:"build/pages/home/home.html",
    providers:[OmcService]
})
export class HomePage{
    logo:any;
    constructor(){
         this.logo = 'img/logo.png';
    }
}