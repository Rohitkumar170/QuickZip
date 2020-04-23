import * as tslib_1 from "tslib";
/// <reference path="../../services/downloadmandate/downloadmandate.service.ts" />
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadmandateComponent } from './downloadmandate.component';
import { CommonModule } from '@angular/common';
import { DownloadmandateRoutingModule } from './downloadmandate-routing.module';
import { DownloadmandateService } from '../../services/downloadmandate/downloadmandate.service';
var DownloadmandateModule = /** @class */ (function () {
    function DownloadmandateModule() {
    }
    DownloadmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DownloadmandateComponent],
            imports: [
                CommonModule,
                ReactiveFormsModule, FormsModule,
                DownloadmandateRoutingModule
            ],
            providers: [DownloadmandateService]
        })
    ], DownloadmandateModule);
    return DownloadmandateModule;
}());
export { DownloadmandateModule };
//# sourceMappingURL=downloadmandate.module.js.map