import {Page, Alert, NavController} from 'ionic-angular';
import {RegisterModel} from '../../model/register.model';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
import {AuthenticatePage} from '../authenticate/authenticate';
@Page({
  templateUrl: 'build/pages/register/register.html',
  providers:[EcmService]
})

export class RegisterPage {
    logo;
    omc;
    loading = 'img/loading.svg';
    submitted = false;
    registerModel:any;
    results:any;
    response:any;
    nav:any;
    hidden:any;
    constructor(omc: EcmService,nav: NavController){
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
                    err => this.doAlert(err.json()),
                    () => {
                        this.doAlert(this.results)
                        // this.nav.setRoot(AuthenticatePage);
                    }
                );
    }
    
    doAlert(results:any){
        this.submitted = false;
        let alert = Alert.create({
            title: results.title,
            subTitle: results.message,
            buttons: ['Ok']
        });
        this.nav.present(alert);
        
    }
}
