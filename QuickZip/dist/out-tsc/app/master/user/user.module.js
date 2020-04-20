import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib_1.__decorate([
        NgModule({
            declarations: [UserComponent],
            imports: [
                CommonModule,
                UserRoutingModule
            ]
        })
    ], UserModule);
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=user.module.js.map