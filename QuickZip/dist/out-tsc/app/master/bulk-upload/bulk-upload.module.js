import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkUploadComponent } from './bulk-upload.component';
import { BulkUploadRoutingModule } from './bulk-upload-routing.module';
var BulkUploadModule = /** @class */ (function () {
    function BulkUploadModule() {
    }
    BulkUploadModule = tslib_1.__decorate([
        NgModule({
            declarations: [BulkUploadComponent],
            imports: [
                CommonModule,
                BulkUploadRoutingModule
            ]
        })
    ], BulkUploadModule);
    return BulkUploadModule;
}());
export { BulkUploadModule };
//# sourceMappingURL=bulk-upload.module.js.map