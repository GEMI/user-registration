import { ValidationService } from './validation.service';
import { User } from '../user/user.class';
import { Control } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { ReflectiveInjector, Injectable, provide } from '@angular/core';
import { expect, it, describe, beforeEach, beforeEachProviders, inject } from '@angular/core/testing';

describe('Validation service', ()=> {
    beforeEachProviders(() => [ValidationService]);

    it('Should return an error if string does not start with uppercase', inject([ValidationService], (validationService:ValidationService) => {
        let result = validationService.startsWithUpperCase(new Control("test"));
        expect(result).toEqual({'upper':true});
    }));

    it('Should NOT return an error if string starts with uppercase', inject([ValidationService], (validationService:ValidationService) => {
        let result = validationService.startsWithUpperCase(new Control("Test"));
        expect(result).toEqual(null);
    }));

});