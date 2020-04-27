import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewComponent } from './report-view.component';
import { ReportViewRoutingModule } from './report-view-routing.module';
var ReportViewModule = /** @class */ (function () {
    function ReportViewModule() {
    }
    ReportViewModule = tslib_1.__decorate([
        NgModule({
            declarations: [ReportViewComponent],
            imports: [
                CommonModule,
                ReportViewRoutingModule
            ]
        })
    ], ReportViewModule);
    return ReportViewModule;
}());
export { ReportViewModule };
//# sourceMappingURL=report-view.module.js.map