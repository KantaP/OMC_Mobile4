import {Page, Alert, NavController,Storage, LocalStorage} from 'ionic-angular';
import { NgForm } from 'angular2/common';
import {AuthenticateModel} from '../../model/authenticate.model';
import {OmcService} from '../../service/omc';
import {forwardRef,OnInit} from 'angular2/core';
// import {SecurityPage} from '../security/security';
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
    token:any;
    constructor(private nav:NavController,
                private omc:OmcService){
        this.local = new Storage(LocalStorage);
        this.logo = 'img/logo.png';
        this.authenticateModel = new AuthenticateModel('','');
    }
    ngOnInit(){
        let token 
        this.local.get("token")
                    .then((data) => {
                        this.token = data
                        this.omc.checkToken(this.token)
                                .subscribe(
                                    response => this.nav.setRoot(HomePage),
                                    err => this.local.remove('token'),
                                    () => console.log("Mobile Init")
                                );
                    });
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