import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DemophysicalComponent } from './demophysical.component';
import { CommonModule } from '@angular/common';
import { DemophysicalRoutingModule } from './demophysical-routing.module';
var DemophysicalModule = /** @class */ (function () {
    function DemophysicalModule() {
    }
    DemophysicalModule = tslib_1.__decorate([
        NgModule({
            declarations: [DemophysicalComponent],
            imports: [
                CommonModule,
                DemophysicalRoutingModule
            ]
        })
    ], DemophysicalModule);
    return DemophysicalModule;
}());
export { DemophysicalModule };
//# sourceMappingURL=demophysical.module.js.map