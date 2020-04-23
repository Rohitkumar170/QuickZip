import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NachmandateRoutingModule } from './nachmandate-routing.module';
import { NachMandateComponent } from './nach-mandate.component';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
var NachmandateModule = /** @class */ (function () {
    function NachmandateModule() {
    }
    NachmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [NachMandateComponent],
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NachmandateRoutingModule
            ],
            providers: [
                BankFormService,
                { provide: 'BASE_URL', useFactory: getBaseUrl }
            ],
        })
    ], NachmandateModule);
    return NachmandateModule;
}());
export { NachmandateModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=nachmandate.module.js.map