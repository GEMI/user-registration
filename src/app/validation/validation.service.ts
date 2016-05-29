import { Injectable } from '@angular/core';
import { Control } from '@angular/common';

interface ValidationResult {
    [key:string]:boolean;
}

@Injectable()
export class ValidationService {

    public addressValidator(control:Control):Promise<ValidationResult> {
        let googleMaps = window['google'].maps;
        let geocoder = new googleMaps.Geocoder();

        return new Promise((resolve, reject) => {
            geocoder.geocode({'address': control.value}, (results, status) => {
                if (status === googleMaps.GeocoderStatus.OK) {
                    return resolve(null);
                } else {
                    return resolve({'address': true});
                }
            });
        });
    }

    public startsWithUpperCase(control:Control):ValidationResult {
        let firstLetter = control.value.charAt(0);
        if (control.value && firstLetter !== firstLetter.toUpperCase()) {
            return {'upper': true};
        }
        return null;
    }

    static getValidatorErrorMessage(code:string) {
        let config = {
            'required': 'This field is required',
            'minlength': 'Minimum length is 3 characters',
            'address': 'Your address seems to be incorrect',
            'upper': 'Should start with an uppercase letter'
        };
        return config[code];
    }
}