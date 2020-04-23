import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadmandateComponent } from './downloadmandate.component';
import { CommonModule } from '@angular/common';
import { DownloadmandateRoutingModule } from './downloadmandate-routing.module';
var DownloadmandateModule = /** @class */ (function () {
    function DownloadmandateModule() {
    }
    DownloadmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DownloadmandateComponent],
            imports: [
                CommonModule,
                DownloadmandateRoutingModule, FormsModule, ReactiveFormsModule
            ],
            providers: []
        })
    ], DownloadmandateModule);
    return DownloadmandateModule;
}());
export { DownloadmandateModule };
//# sourceMappingURL=downloadmandate.module.js.map