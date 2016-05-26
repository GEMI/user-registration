import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/common';
import {User} from '../user/user.class';
import {UserRegistrationStore} from './user-registration.service';
import {AddressValidationService} from '../validation/address-validation.service';

@Component({
    selector: 'user-registration-component',
    templateUrl:'src/app/user-registration/user-registration.template.html',
    providers: [AddressValidationService]
})

export class UserRegistrationComponent {
    constructor(private userRegistrationStore: UserRegistrationStore, private addressValidationService: AddressValidationService) { }

    model = User;

    registerUser(user: User){
        this.addressValidationService.validate(user).forEach(result => {
            if(result) {
                this.userRegistrationStore.saveUser(user);
            }  else {
                 console.log("Needs validation message.");
            }
        });
    };
}