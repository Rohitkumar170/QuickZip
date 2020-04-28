import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntitySetupComponent } from './entity-setup.component';
import { EntitySetupRoutingModule } from './entity-setup-routing.module';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
var EntitySetupModule = /** @class */ (function () {
    function EntitySetupModule() {
    }
    EntitySetupModule = tslib_1.__decorate([
        NgModule({
            declarations: [EntitySetupComponent],
            imports: [
                CommonModule,
                EntitySetupRoutingModule, FormsModule, ReactiveFormsModule
            ],
            providers: [
                EntitySetupServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], EntitySetupModule);
    return EntitySetupModule;
}());
export { EntitySetupModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=entity-setup.module.js.map