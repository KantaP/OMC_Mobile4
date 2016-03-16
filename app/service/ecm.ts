import {Component,Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {SmsModel} from '../model/sms.model';
import 'rxjs/add/operator/map';
@Injectable()
export class EcmService{
    local:any;
    database = "demo";
    sms = new SmsModel('3266470','ecmauuk','demo01');
    constructor(
        private http: Http){
    }
    
    encodeSms(){
        return btoa(this.sms.api+':'+this.sms.user+':'+this.sms.pass);
    }
    
    authenticate(username,password){
        let body = "_u=" + btoa(username) + "&_p=" + btoa(password) + "&_d=" + btoa(this.database);
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/signIn',
                             body, {headers: headers})
                             .map(response => response.json())
    }
    
    register(fullname,telephone,email){
        let body = "_f=" + btoa(fullname) + "&_t=" + btoa(telephone) + "&_e=" + btoa(email) + "&_d=" + btoa(this.database);
        if(this.sms.api != ''){
            body += "&_s=" + this.encodeSms();
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/member/signUp',
                             body, {headers: headers})
                             .map(response => response.json())
    }
    
    checkToken(token){
        let body = "_t=" + token;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/checkToken',
                             body, {headers: headers})
                             .map(response => response.json());
    }
    
    checkVerify(v_code,email){
        let body = "_vc=" + v_code + '&_e=' + btoa(email) + '&_d=' + btoa(this.database);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/checkVerify',
                             body, {headers: headers})
                             .map(response => response.json());
    }
    
    getVehicleType(passengers){
        let body = "_n=" + passengers + '&_d=' + btoa(this.database);
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/quote/getVehicleType',
                                body,{headers:headers})
                                .map(response => response.json());
    }
    
    getLuggageType(passengers,vehicle){
        let body = "_n=" + passengers + '&_v=' + vehicle  +'&_d=' + btoa(this.database);
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/quote/getLuggageType',
                                body,{headers:headers})
                                .map(response => response.json());
    }
    
    getJourneyType(){
        let body = '_d=' + btoa(this.database);
        let headers = new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/quote/getJourneyType',
                                body, {headers:headers})
                        .map(response => response.json());
    }
}