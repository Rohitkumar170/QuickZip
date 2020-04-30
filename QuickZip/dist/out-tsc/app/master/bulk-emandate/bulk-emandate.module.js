import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkEmandateComponent } from './bulk-emandate.component';
import { BulkEmandateRoutingModule } from './bulk-emandate-routing.module';
import { BuldEmandateService } from '../../../app/Services/BulkEMandate/buld-emandate.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
var BulkEmandateModule = /** @class */ (function () {
    function BulkEmandateModule() {
    }
    BulkEmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [BulkEmandateComponent],
            imports: [
                CommonModule,
                BulkEmandateRoutingModule,
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [BuldEmandateService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
        })
    ], BulkEmandateModule);
    return BulkEmandateModule;
}());
export { BulkEmandateModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=bulk-emandate.module.js.map