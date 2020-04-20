import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DownloadoldemandateComponent } from './downloadoldemandate.component';
import { CommonModule } from '@angular/common';
import { DownloadoledemandateRoutingModule } from './downloadoledemandate-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';
var DownloadoledemandateModule = /** @class */ (function () {
    function DownloadoledemandateModule() {
    }
    DownloadoledemandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DownloadoldemandateComponent],
            imports: [
                CommonModule,
                DownloadoledemandateRoutingModule,
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [DownloadoldemandateService]
        })
    ], DownloadoledemandateModule);
    return DownloadoledemandateModule;
}());
export { DownloadoledemandateModule };
//# sourceMappingURL=downloadoledemandate.module.js.map