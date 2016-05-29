import { Injectable } from '@angular/core';

@Injectable()
export class GoogleMapsApi {
    
     
    
    public init () {
        return this.google;
    }
    
    public getNewGeocoder () {
        return new this.google.maps.Geocoder();
    }
}