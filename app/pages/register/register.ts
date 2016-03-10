import {Page, Alert, NavController} from 'ionic-angular';
import {RegisterModel} from '../../model/register.model';
import {OmcService} from '../../service/omc';
import {forwardRef} from 'angular2/core';
@Page({
  templateUrl: 'build/pages/register/register.html',
  providers:[OmcService]
})

export class RegisterPage {
    logo;
    omc;
    submitted = false;
    registerModel:any;
    results:any;
    response:any;
    nav:any;
    hidden:any;
    constructor(omc: OmcService,nav: NavController){
        this.logo = 'img/logo.png';
        this.omc = omc;
        this.registerModel = new RegisterModel('','','');
        this.nav = nav;
        this.hidden = true;
    }
    
    registerMember(){
        this.submitted = true;
        this.omc.register(this.registerModel.fullname,
                          this.registerModel.telephone,
                          this.registerModel.email)
                .subscribe(
                    response => this.results = response,
                    err => console.log(err),
                    () => this.doAlert(this.results)
                );
    }
    
    doAlert(results:any){
        let alert = Alert.create({
            title: results.title,
            subTitle: results.message,
            buttons: ['Ok']
        });
        this.nav.present(alert);
        this.submitted = false;
    }
}
