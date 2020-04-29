import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntityBankSetupComponent } from './entity-bank-setup.component';
import { EntityBankSetupRoutingModule } from './entity-bank-setup-routing.module';
import { EntityBankService } from 'ClientApp/app/Services/EntityBankSetup/entity-bank.service';
var EntityBankSetupModule = /** @class */ (function () {
    function EntityBankSetupModule() {
    }
    EntityBankSetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [EntityBankSetupComponent],
            imports: [
                CommonModule,
                EntityBankSetupRoutingModule, ReactiveFormsModule, FormsModule
            ],
            providers: [EntityBankService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
        })
    ], EntityBankSetupModule);
    return EntityBankSetupModule;
}());
export { EntityBankSetupModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=entity-bank-setup.module.js.map