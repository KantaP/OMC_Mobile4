import {Page,MenuController, Alert, NavController,Storage, LocalStorage} from 'ionic-angular';
import { NgForm } from 'angular2/common';
import {AuthenticateModel} from '../../model/authenticate.model';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
// import {SecurityPage} from '../security/security';
import {HomePage} from '../home/home';
@Page({
  templateUrl: 'build/pages/authenticate/authenticate.html',
  providers:[EcmService]
})
export class AuthenticatePage{
    logo;
    authenticateModel;
    submitted = false;
    results:any;
    local:any;
    token:any;
    constructor(private nav:NavController,
                private omc:EcmService,
                private menu:MenuController){
        this.local = new Storage(LocalStorage);
        this.logo = 'img/logo.png';
        this.authenticateModel = new AuthenticateModel('','');
        this.menu.enable(false);
    }
    
    onSubmit() { 
        this.omc.authenticate(this.authenticateModel.username,
                              this.authenticateModel.password)
                .subscribe(
                    response => this.results = response,
                    err => this.doAlert(err.json()),
                    () => this.afterSignIn()
                );
     }
     afterSignIn(){
         if(this.results.token){
             this.local.set("token",this.results.token);
             this.menu.enable(true);
             this.nav.setRoot(HomePage);
         }
     }
     doAlert(response){
         let alert = Alert.create({
            title: response.title,
            subTitle: response.message,
            buttons: ['Ok']
        });
        this.nav.present(alert);
     }
}