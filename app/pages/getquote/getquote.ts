import {Page, Alert, NavController} from 'ionic-angular';
import {OmcService} from '../../service/omc';
import {forwardRef} from 'angular2/core';
@Page({
    templateUrl:"build/pages/getquote/getquote.html",
    providers:[OmcService]
})
export class GetQuotePage{
    logo:any;
    constructor(){
         this.logo = 'img/logo.png';
    }
}