import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitySetupComponent } from './entity-setup.component';
import { EntitySetupRoutingModule } from './entity-setup-routing.module';
var EntitySetupModule = /** @class */ (function () {
    function EntitySetupModule() {
    }
    EntitySetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [EntitySetupComponent],
            imports: [
                CommonModule,
                EntitySetupRoutingModule
            ]
        })
    ], EntitySetupModule);
    return EntitySetupModule;
}());
export { EntitySetupModule };
//# sourceMappingURL=entity-setup.module.js.map