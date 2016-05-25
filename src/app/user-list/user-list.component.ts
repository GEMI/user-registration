import {Component} from '@angular/core';
import {UserRegistrationService} from '../user-registration/user-registration.service'

@Component({
    selector: 'user-list-component',
    templateUrl:'src/app/user-list/user-list.template.html',
    providers: [UserRegistrationService]
})

export class UserListComponent {

    users = [];

    constructor(private userRegistrationService: UserRegistrationService) { }

    getUsers() {
        this.users = this.userRegistrationService.getUsers();
    }
    
    ngOnInit() {
        console.log("well");
        this.getUsers();
    }
}