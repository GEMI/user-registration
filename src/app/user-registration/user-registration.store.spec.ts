import { UserRegistrationStore } from './user-registration.store';
import { User } from '../user/user.class';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { expect, it, describe, beforeEach, beforeEachProviders, inject } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('User registration store', () => {

    const expectedUser = '{"firstName":"Name","lastName":"Surname","address":"Address"}';

    beforeEachProviders(() => [UserRegistrationStore]);
    beforeEach(() => {
        //reset user count before each test
        localStorage.setItem('users', '[]');
    });

    it('Should save and return user data', inject([UserRegistrationStore], (store:UserRegistrationStore) => {
        store.saveUser(new User('Name', 'Surname', 'Address'));
        expect(JSON.stringify(store.users[0])).toEqual(expectedUser);
        expect(store.users.length).toEqual(1);
    }));

    it('Should save and return multiple users data', inject([UserRegistrationStore], (store:UserRegistrationStore) => {
        expect(store.users.length).toEqual(0);
        store.saveUser(new User('Name', 'Surname', 'Address'));
        store.saveUser(new User('Name', 'Surname', 'Address'));
        expect(store.users.length).toEqual(2);
    }));

    it('Should return new user when calling getNewUser method', inject([UserRegistrationStore], (store:UserRegistrationStore) => {
        const user = store.getNewUser();
        expect(user).toEqual(jasmine.any(User));
    }));

    it('Should return new empty user when calling getNewUser method', inject([UserRegistrationStore], (store:UserRegistrationStore) => {
        const user = store.getNewUser();
        expect(user.firstName).toBe('');
        expect(user.lastName).toBe('');
        expect(user.address).toBe('');
    }));
});
