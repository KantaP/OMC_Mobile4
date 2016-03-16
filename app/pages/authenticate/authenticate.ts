import {Page,MenuController, Alert, NavController,Storage, LocalStorage} from 'ionic-angular';
import { NgForm } from 'angular2/common';
import {AuthenticateModel} from '../../model/authenticate.model';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
import {SecurityPage} from '../security/security';
import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
@Page({
  templateUrl: 'build/pages/authenticate/authenticate.html',
  providers:[EcmService]
})
export class AuthenticatePage{
    logo;
    loading = 'img/loading.svg';
    authenticateModel;
    submitted = false;
    results:any;
    local:any;
    token:any;
    registerPage = RegisterPage;
    constructor(private nav:NavController,
                private omc:EcmService,
                private menu:MenuController){
        this.local = new Storage(LocalStorage);
        this.logo = 'img/logo.png';
        this.authenticateModel = new AuthenticateModel('','');
        this.menu.enable(false);
    }
    
    onSubmit() { 
        this.submitted = true;
        this.omc.authenticate(this.authenticateModel.username,
                              this.authenticateModel.password)
                .subscribe(
                    response => this.results = response,
                    err => this.doAlert(err.json()),
                    () => this.afterSignIn()
                );
     }
     afterSignIn(){
         this.submitted = false;
         if(this.results.token){
             if(this.results.auth==1){
                 this.nav.setRoot(HomePage);
                 this.local.set("token",this.results.token);
                 
             }else if(this.results.auth==-1){
                 this.nav.setRoot(SecurityPage,{email: this.authenticateModel.username});
             }
         }
     }
     doAlert(response){
         this.submitted = false;
         let alert = Alert.create({
            title: response.title,
            subTitle: response.message,
            buttons: ['Ok']
        });
        this.nav.present(alert);
     }
}