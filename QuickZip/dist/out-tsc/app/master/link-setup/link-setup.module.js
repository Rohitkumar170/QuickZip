import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LinkSetupComponent } from './link-setup.component';
import { LinkSetupRoutingModule } from './link-setup-routing.module';
//import { LinkSetupService } from 'ClientApp/app/Services/link-setup/link-setup.service';
var LinkSetupModule = /** @class */ (function () {
    function LinkSetupModule() {
    }
    LinkSetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [LinkSetupComponent],
            imports: [
                CommonModule,
                LinkSetupRoutingModule, FormsModule, ReactiveFormsModule
            ],
        })
    ], LinkSetupModule);
    return LinkSetupModule;
}());
export { LinkSetupModule };
//export function getBaseUrl() {
//    return document.getElementsByTagName('base')[0].href;
//}
//# sourceMappingURL=link-setup.module.js.map