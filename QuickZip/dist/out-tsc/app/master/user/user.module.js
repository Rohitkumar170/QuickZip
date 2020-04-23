import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { UserServiceService } from 'ClientApp/app/Services/User/user-service.service';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib_1.__decorate([
        NgModule({
            declarations: [UserComponent],
            imports: [
                CommonModule,
                UserRoutingModule, ReactiveFormsModule, FormsModule
            ],
            providers: [UserServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
        })
    ], UserModule);
    return UserModule;
}());
export { UserModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=user.module.js.map