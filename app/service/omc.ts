import {Component,Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()
export class OmcService{
    local:any;
    constructor(
        private http: Http){
            
    }
    
    authenticate(username,password){
        let body = "_u=" + btoa(username) + "&_p=" + btoa(password);
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/signIn',
                             body, {headers: headers})
                             .map(response => response.json())
    }
    
    register(fullname,telephone,email){
        let body = "fullname="+fullname+"&telephone="+telephone+"&email="+email;
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/member/signUp',
                             body, {headers: headers})
                             .map(response => response.json())
                                
    }
    
    checkToken(token){
        let body = "_t="+token;
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://webservice.ecoachmanager.com/Api/auth/checkToken',
                             body, {headers: headers})
                             .map(response => response.json())
    }
}