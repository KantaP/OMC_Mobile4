import {Page, NavController,Storage, LocalStorage} from 'ionic-angular';
import {EcmService} from '../../service/ecm';
import {forwardRef,OnInit} from 'angular2/core';
import {HomePage} from '../home/home';
import {AuthenticatePage} from '../authenticate/authenticate';
@Page({
    templateUrl: 'build/pages/initial/initial.html',
    providers:[EcmService]
})
export class InitialPage implements OnInit{
    logo = 'img/logo.png';
    local = new Storage(LocalStorage);
    token:any;
    constructor(private omc:EcmService,
                private nav:NavController){
    }
    ngOnInit(){
        let token 
        this.local.get("token")
        .then((data) => {
            this.token = data
            this.omc.checkToken(this.token)
                    .subscribe(
                        response => this.nav.setRoot(HomePage),
                        err => this.nav.setRoot(AuthenticatePage),
                        () => console.log("Mobile Init")
                    );
        });
    }
}