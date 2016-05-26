import {Component, NgZone} from '@angular/core';
import {NgForm} from '@angular/common';
import {User} from '../user/user.class';
import {UserRegistrationStore} from './user-registration.store';
import {AddressValidationService} from '../validation/address-validation.service';

@Component({
    selector: 'user-registration-component',
    templateUrl:'src/app/user-registration/user-registration.template.html',
    providers: [AddressValidationService]
})

export class UserRegistrationComponent {

    constructor(private userRegistrationStore: UserRegistrationStore, 
                private addressValidationService: AddressValidationService, 
                private ngZone: NgZone) { }
                
    model = User;
    isValid = true;

    public registerUser(user: User){
        var that = this;
        this.addressValidationService.validate(user).forEach(result => {
            if(result) {
                that.userRegistrationStore.saveUser(user);
                that.ngZone.run(() => {
                    that.clearUserModel();
                    that.isValid = true;
                });
            } else {
                that.ngZone.run(() => {
                    that.isValid = false;
                });
            }
        });
    };

    private clearUserModel(){
        this.model = {};
    }
}