import * as tslib_1 from "tslib";
/// <reference path="../../services/umrnupload/umrn-upload.service.ts" />
import { NgModule } from '@angular/core';
import { UmrnuploadComponent } from './umrnupload.component';
import { CommonModule } from '@angular/common';
import { UmrnUploadRoutingModule } from './umrn-upload-routing.module';
var UmrnUploadModule = /** @class */ (function () {
    function UmrnUploadModule() {
    }
    UmrnUploadModule = tslib_1.__decorate([
        NgModule({
            declarations: [UmrnuploadComponent],
            imports: [
                CommonModule,
                UmrnUploadRoutingModule
            ]
        })
    ], UmrnUploadModule);
    return UmrnUploadModule;
}());
export { UmrnUploadModule };
//# sourceMappingURL=umrn-upload.module.js.map