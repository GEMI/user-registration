import { Component } from '@angular/core';
import { UserRegistrationStore } from './user-registration/user-registration.store';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
    selector: 'app-component',
    template: '<user-registration-component></user-registration-component>' +
              '<user-list-component></user-list-component>',
    directives: [UserListComponent, UserRegistrationComponent],
    providers: [UserRegistrationStore]
})

export class AppComponent {}
