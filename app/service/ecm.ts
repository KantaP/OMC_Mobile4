import {Component,Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {SmsModel} from '../model/sms.model';
import 'rxjs/add/operator/map';
@Injectable()
export class EcmService{
    local:any;
    database:any;
    sms:any;
    constructor(
        private http: Http){
            this.database = "demo";
            this.sms = new SmsModel('3266470','ecmauuk','demo01');
    }
    
    encodeSms(){
        return btoa(this.sms.api+':'+this.sms.user+':'+this.sms.pass);
    }
    
    authenticate(username,password){
        let body = "_u=" + btoa(username) + "&_p=" + btoa(password) + "&_d=" + btoa(this.database);
        if(this.sms.api != ''){
            body += "&_s=" + this.encodeSms();
        }
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/signIn',
                             body, {headers: headers})
                             .map(response => response.json())
    }
    
    register(fullname,telephone,email){
        let body = "_f=" + fullname + "&_t=" + telephone + "&_e=" + email + "&_d=" + btoa(this.database);
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/member/signUp',
                             body, {headers: headers})
                             .map(response => response.json())
                                
    }
    
    checkToken(token){
        let body = "_t=" + token;
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/checkToken',
                             body, {headers: headers})
                             .map(response => response.json());
    }
    
    getVehicleType(passengers){
        let body = "_n=" + passengers + '&_d=' + btoa(this.database);
        let data;
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/quote/getVehicleType',
                                body,{headers:headers})
                                .map(response => response.json());
    }
    
    getLuggageType(passengers,vehicle){
        let body = "_n=" + passengers + '&_v=' + vehicle  +'&_d=' + btoa(this.database);
        let data;
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/quote/getLuggageType',
                                body,{headers:headers})
                                .map(response => response.json());
    }
}