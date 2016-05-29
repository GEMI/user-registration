import {Component, NgZone} from '@angular/core';
import {NgForm, FORM_PROVIDERS, FormBuilder, Validators, ControlGroup, Control } from '@angular/common';
import {User} from '../user/user.class';
import {SnackbarComponent} from '../snackbar/snackbar.component';
import {UserRegistrationStore} from './user-registration.store';
import {ValidationService} from '../validation/validation.service';
import {ValidationMessageComponent} from '../validation/validation-message/validation-message.component';

@Component({
    selector: 'user-registration-component',
    templateUrl: 'src/app/user-registration/user-registration.template.html',
    providers: [ValidationService, FORM_PROVIDERS],
    directives: [SnackbarComponent, ValidationMessageComponent]
})

export class UserRegistrationComponent {
    
    public userForm: any;
    public firstName: Control;
    public lastName: Control; 
    public address: Control;
    
    constructor(private userRegistrationStore: UserRegistrationStore, 
                private validationService: ValidationService, 
                private ngZone: NgZone, private formBuilder: FormBuilder) {
                     
        this.firstName = new Control('', Validators.compose([Validators.required, Validators.minLength(3), validationService.startsWithUpperCase]));
        this.lastName = new Control('', Validators.compose([Validators.required, Validators.minLength(3), validationService.startsWithUpperCase]));
        this.address = new Control('', Validators.compose([Validators.required, Validators.minLength(3)]), validationService.addressValidator);
        
        this.userForm = formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address        
        });
    }
                
    private isUserCreated = false;

    public registerUser() {
        if (this.userForm.dirty && this.userForm.valid) {
            this.userRegistrationStore.saveUser(this.buildNewUser(this.userForm));
            this.ngZone.run(() => {
                this.showSuccessSnackbar(); 
                this.clearUserForm();                  
            });
        }
    };

    private clearUserForm() {
        let formControls = this.userForm.controls;
        for (let abstractControl in formControls) {
            let control = (<Control> formControls[abstractControl]);
            control.updateValue("");
            control.setErrors(null);
            control.markAsPending();
        }
    }
    
    private showSuccessSnackbar() {
        this.isUserCreated = true;
        setTimeout(() => {
            this.isUserCreated = false;  
        }, 5000)
    }
    
    private buildNewUser(form: any) {
        return new User(form.value.firstName, form.value.lastName, form.value.address);    
    }
    
}