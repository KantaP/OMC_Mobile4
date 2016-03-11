import {Page, Alert, NavController,Storage, LocalStorage} from 'ionic-angular';
import { NgForm } from 'angular2/common';
import {AuthenticateModel} from '../../model/authenticate.model';
import {OmcService} from '../../service/omc';
import {forwardRef,OnInit} from 'angular2/core';
import {SecurityPage} from '../security/security';
import {HomePage} from '../home/home';
@Page({
  templateUrl: 'build/pages/authenticate/authenticate.html',
  providers:[OmcService]
})
export class AuthenticatePage implements OnInit{
    logo;
    authenticateModel;
    submitted = false;
    results:any;
    local:any;
    constructor(private nav:NavController,
                private omc:OmcService){
        this.local = new Storage(LocalStorage);
        this.logo = 'img/logo.png';
        this.authenticateModel = new AuthenticateModel('','');
    }
    ngOnInit(){
        
    }
    onSubmit() { 
        this.nav.setRoot(HomePage);
        // this.omc.authenticate(this.authenticateModel.username,
        //                       this.authenticateModel.password)
        //         .subscribe(
        //             response => this.results = response,
        //             err => this.doAlert(err.json()),
        //             () => this.afterSignIn()
        //         );
     }
     afterSignIn(){
         if(this.results.token){
             this.local.set("token",this.results.token);
             this.nav.push(HomePage);
         }
     }
     doAlert(response){
         console.log(response);
         let alert = Alert.create({
            title: response.title,
            subTitle: response.message,
            buttons: ['Ok']
        });
        this.nav.present(alert);
     }
}