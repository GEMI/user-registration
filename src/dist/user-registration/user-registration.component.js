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
var user_registration_store_1 = require('./user-registration.store');
var address_validation_service_1 = require('../validation/address-validation.service');
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(userRegistrationStore, addressValidationService, ngZone) {
        this.userRegistrationStore = userRegistrationStore;
        this.addressValidationService = addressValidationService;
        this.ngZone = ngZone;
        this.model = this.userRegistrationStore.getNewUser();
        this.isValid = true;
    }
    UserRegistrationComponent.prototype.registerUser = function (user) {
        var that = this;
        this.addressValidationService.validate(user).forEach(function (result) {
            if (result) {
                that.userRegistrationStore.saveUser(user);
                that.ngZone.run(function () {
                    that.clearUserModel();
                    that.isValid = true;
                });
            }
            else {
                that.ngZone.run(function () {
                    that.isValid = false;
                });
            }
        });
    };
    ;
    UserRegistrationComponent.prototype.clearUserModel = function () {
        this.model = this.userRegistrationStore.getNewUser();
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'user-registration-component',
            templateUrl: 'src/app/user-registration/user-registration.template.html',
            providers: [address_validation_service_1.AddressValidationService]
        }), 
        __metadata('design:paramtypes', [user_registration_store_1.UserRegistrationStore, address_validation_service_1.AddressValidationService, core_1.NgZone])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
