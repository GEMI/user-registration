import { Component, Host } from '@angular/core';
import { NgFormModel } from '@angular/common';
import { ValidationService } from '../validation.service';

@Component({
    selector: 'validation-message',
    inputs: ['controlName: control'],
    template: `<div class="mdl-error-text" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})

export class ValidationMessageComponent {

    private controlName: string;

    constructor(@Host() private _formDir: NgFormModel) { }
     
    public get errorMessage() {     
        let form = this._formDir.form;
        let controlElement = form.find(this.controlName);

        for (let propertyName in controlElement.errors) {
            if (controlElement.errors.hasOwnProperty(propertyName) && controlElement.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }
}