import { Injectable} from '@angular/core';
import { User } from '../user/user.class';

@Injectable()
export class UserRegistrationStore {

    users: User[];

    constructor() {
        this.users = this.getUsers() || [];
    }

    public getUsers() {
        return JSON.parse(localStorage.getItem('users'));
    }

    public saveUser(user:User) {
        var currentUsers = this.getUsers();

        if (Array.isArray(currentUsers)) {
            currentUsers.push(user);
            localStorage.setItem('users', JSON.stringify(currentUsers));
        } else {
            localStorage.setItem('users', JSON.stringify([user]));
        }
        this.users.push(user);
    }
}