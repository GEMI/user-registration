import {Component, Input} from '@angular/core';
import {NgForm} from '@angular/common';
import {User} from '../user/user.class';
import {UserRegistrationStore} from './user-registration.service';

@Component({
    selector: 'user-registration-component',
    templateUrl:'src/app/user-registration/user-registration.template.html'
})

export class UserRegistrationComponent {
    constructor(private userRegistrationStore: UserRegistrationStore) { }

    model = User;

    registerUser(user: User){
        this.userRegistrationStore.saveUser(user);
    }
}