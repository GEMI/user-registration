import {Component} from '@angular/core';
import {User} from '../user/user.class';
import {UserRegistrationStore} from '../user-registration/user-registration.store';

@Component({
    selector: 'user-list-component',
    templateUrl: 'src/app/user-list/user-list.template.html'
})

export class UserListComponent {

    users: User[];

    constructor(private userRegistrationStore: UserRegistrationStore) {
        this.users = userRegistrationStore.users;
    }
}