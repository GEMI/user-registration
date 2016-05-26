"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_class_1 = require('../user/user.class');
var user_registration_service_1 = require('./user-registration.service');
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(userRegistrationStore) {
        this.userRegistrationStore = userRegistrationStore;
        this.model = user_class_1.User;
    }
    UserRegistrationComponent.prototype.registerUser = function (user) {
        this.userRegistrationStore.saveUser(user);
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'user-registration-component',
            templateUrl: 'src/app/user-registration/user-registration.template.html'
        }), 
        __metadata('design:paramtypes', [user_registration_service_1.UserRegistrationStore])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
