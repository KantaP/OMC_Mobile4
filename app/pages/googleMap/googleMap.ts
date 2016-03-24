import {Page,MenuController,NavController,Platform, NavParams} from 'ionic-angular';
import {OnInit} from 'angular2/core';
@Page({
    templateUrl:'build/pages/googleMap/googleMap.html'
})
export class GoogleMapPage implements OnInit{
    from:string
    searchQuery:string
    constructor(private platform: Platform,
                private params: NavParams,
                private menu: MenuController){
        
        this.from = this.params.get('from');
        this.menu.enable(false);
        this.searchQuery = '';
    }
    initializeMap() {
        
            var minZoomLevel = 12; 
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: minZoomLevel,
                center: new google.maps.LatLng(38.50, -90.50),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            var marker = new google.maps.Marker({
                map: this.map,
                position: new google.maps.LatLng(38.50, -90.50)
            });
       
    } 
    searchMap(search){
        
    }
    ngOnInit(){
        this.initializeMap();
    }
}