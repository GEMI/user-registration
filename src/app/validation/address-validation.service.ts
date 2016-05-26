import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AddressValidationService {

    private geocoder = new google.maps.Geocoder();

    private getFormatedAddress(user:User) {
        return user.address1 + ", " + user.address2 + ", " + user.city + ", " + user.zipCode;
    }

    public validate(user:User) {
        var that = this;

        return Observable.create((observer) => {
            this.geocoder.geocode({ 'address': this.getFormatedAddress(user) }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    return observer.next(true);
                }
                return observer.next(false);
            }
        });
    }
    
}