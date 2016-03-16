import {Page, Alert, NavController} from 'ionic-angular';
import {EcmService} from '../../service/ecm';
import {forwardRef} from 'angular2/core';
import {QuoteModel} from '../../model/quote.model';
import {GoogleMapPage} from '../../pages/googleMap/googleMap';
@Page({
    templateUrl:"build/pages/getquote/getquote.html",
    providers:[EcmService],
    directives: []
})
export class GetQuotePage{
    logo:any;
    times:any;
    loading = 'img/loading.svg';
    submitted = false;
    directs = [];
    passengers = [];
    vehicles = [];
    journeys = [];
    luggages = [];
    vehicle_pass = false;
    luggage_pass = false;
    journey_pass = false;
    quoteModel = new QuoteModel('','','00:00','','','','','',0,0,0,0,0);
    passenger_select;

    constructor(private omc: EcmService,private nav: NavController){
         this.logo = 'img/logo.png';
         this.times = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30"
                        ,"06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30"
                        ,"12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"
                        ,"18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"];
         for(let i = 1; i < 49; i++){
             this.directs.push(i);
         }
         
         for(let i = 1; i < 72; i++){
             this.passengers.push(i);
         } 
         
    }
    
    getVehicleType(passengers){
        this.passenger_select = passengers
        this.omc.getVehicleType(passengers)
                .subscribe(
                    response => this.vehicles = response,
                    err => console.log(err),
                    () => this.vehicle_pass = true
                );
    }
    
    getLuggageType(vehicle){
        this.omc.getLuggageType(this.passenger_select,vehicle)
                .subscribe(
                    response => this.luggages = response,
                    err => console.log(err),
                    () => this.luggage_pass = true
                );
    }
    
    getJourneyType(){
        this.omc.getJourneyType()
                .subscribe(
                    response => this.journeys = response,
                    err => console.log(err),
                    () => this.journey_pass = true
                )
    }
    
    goToGoogleMap(from){
        this.nav.push(GoogleMapPage,{from:from});
    }
}