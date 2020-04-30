import * as tslib_1 from "tslib";
/// <reference path="../../services/report-vew/report-view.service.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewComponent } from './report-view.component';
import { ReportViewRoutingModule } from './report-view-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { ReportViewService } from 'ClientApp/app/Services/report-vew/report-view.service';
var ReportViewModule = /** @class */ (function () {
    function ReportViewModule() {
    }
    ReportViewModule = tslib_1.__decorate([
        NgModule({
            declarations: [ReportViewComponent],
            imports: [
                CommonModule,
                ReportViewRoutingModule, FormsModule, ReactiveFormsModule
            ]
            // providers:[ReportViewService]
        })
    ], ReportViewModule);
    return ReportViewModule;
}());
export { ReportViewModule };
//# sourceMappingURL=report-view.module.js.map