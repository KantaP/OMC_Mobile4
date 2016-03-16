import {Page, Alert, NavController, NavParams} from 'ionic-angular';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
import { NgForm } from 'angular2/common';
import {SecurityModel} from '../../model/security.model';
import {HomePage} from '../home/home';
@Page({
    templateUrl:"build/pages/security/security.html",
    providers:[EcmService]
})
export class SecurityPage{
    logo:any;
    results;
    securityModel = new SecurityModel('','','','');
    constructor(private omc: EcmService,private nav: NavController,private params: NavParams){
        this.logo = 'img/logo.png';
    }
    
    onSubmit(){
        let v_code = this.securityModel.first + this.securityModel.second + this.securityModel.third + this.securityModel.forth;
        this.omc.checkVerify(v_code,this.params.get('email'))
                .subscribe(
                    response => this.results = response,
                    err => console.log(err),
                    () => this.afterVerify()
                )
    }
    
    afterVerify(){
        this.nav.setRoot(HomePage);
    }
}