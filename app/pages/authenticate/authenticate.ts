import {Page, Alert, NavController} from 'ionic-angular';
import {AuthenticateModel} from '../../model/authenticate.model';
import {OmcService} from '../../service/omc';
import {forwardRef} from 'angular2/core';
import {RegisterPage} from '../register/register';
@Page({
  templateUrl: 'build/pages/authenticate/authenticate.html',
  providers:[OmcService]
})
export class AuthenticatePage{
    logo;
    authenticateModel;
    nav;
    hidden:any;
    constructor(nav:NavController){
        this.logo = 'img/logo.png';
        this.authenticateModel = new AuthenticateModel('','');
        this.nav = nav;
        this.hidden = true;
    }
    signIn(){
        // this.nav.push(RegisterPage);
    }
}