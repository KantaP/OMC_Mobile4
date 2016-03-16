import {Page,MenuController,NavController,Platform, NavParams} from 'ionic-angular';
import {AfterViewInit} from 'angular2/core';
@Page({
    templateUrl:'build/pages/googleMap/googleMap.html'
})
export class GoogleMapPage implements AfterViewInit{
    from:string
    constructor(private platform: Platform,
                private params: NavParams,
                private menu: MenuController){
        
        this.from = this.params.get('from');
        this.menu.enable(false);
    }
    initializeMap() {
        this.platform.ready().then(() => {
            var minZoomLevel = 12; 
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: minZoomLevel,
                center: new google.maps.LatLng(38.50, -90.50),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        });
    } 
    ngAfterViewInit(){
        this.initializeMap();
    }
}