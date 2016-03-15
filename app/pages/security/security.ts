import {Page, Alert, NavController} from 'ionic-angular';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
import { NgForm } from 'angular2/common';
@Page({
    templateUrl:"build/pages/security/security.html",
    providers:[EcmService]
})
export class SecurityPage{
    logo:any;
    constructor(){
        this.logo = 'img/logo.png';
    }
}