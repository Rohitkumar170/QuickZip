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
            providers: [DownloadoldemandateService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
        })
    ], DownloadoledemandateModule);
    return DownloadoledemandateModule;
}());
export { DownloadoledemandateModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=downloadoledemandate.module.js.map