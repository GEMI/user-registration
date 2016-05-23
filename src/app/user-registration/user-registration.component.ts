import {Component, OnInit} from '@angular/core';
import {UserRegistrationService} from './user-registration.service'

@Component({
    selector: 'user-registration-component',
    templateUrl:'src/app/user-registration/user-registration.template.html',
    providers: [UserRegistrationService]
})

export class AppComponent implements OnInit {

    users = [];

    constructor(private userRegistrationService: UserRegistrationService) { }

    ngOnInit() {
        console.log(this.getHeroes());
    }

    getHeroes() {
        this.users = this.userRegistrationService.getUsers();
    }
}