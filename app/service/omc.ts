import {Component,Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()
export class OmcService{
    constructor(private http: Http){}
    
    authenticate(username,password){
        let body = "username=" + username + "&password=" + password;
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://192.168.1.10/ecm_api/Api/auth/signIn',
                             body, {headers: headers})
                             .map(response => response.json())
    }
    
    register(fullname,telephone,email){
        let body = "fullname="+fullname+"&telephone="+telephone+"&email="+email;
        let data;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://192.168.1.10/ecm_api/Api/member/signUp',
                             body, {headers: headers})
                             .map(response => response.json())
                                
    }
}