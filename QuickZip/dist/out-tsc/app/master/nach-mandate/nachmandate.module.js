import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NachmandateRoutingModule } from './nachmandate-routing.module';
import { NachMandateComponent } from './nach-mandate.component';
var NachmandateModule = /** @class */ (function () {
    function NachmandateModule() {
    }
    NachmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [NachMandateComponent],
            imports: [
                CommonModule,
                NachmandateRoutingModule
            ]
        })
    ], NachmandateModule);
    return NachmandateModule;
}());
export { NachmandateModule };
//# sourceMappingURL=nachmandate.module.js.map