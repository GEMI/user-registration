import {Component, OnInit} from '@angular/core';
import {UserListComponent} from '../user-list/user-list.component';

@Component({
    selector: 'user-registration-component',
    templateUrl:'src/app/user-registration/user-registration.template.html',
    directives: [UserListComponent]
})

export class AppComponent implements OnInit {
    
    ngOnInit() {
        console.log("app init");
    }

}