import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DownloadoldmandateComponent } from './downloadoldmandate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DownloadoldmandateRoutingModule } from './downloadoldmandate-routing.module';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
var DownloadoldmandateModule = /** @class */ (function () {
    function DownloadoldmandateModule() {
    }
    DownloadoldmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DownloadoldmandateComponent],
            imports: [
                CommonModule,
                DownloadoldmandateRoutingModule,
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [OldmandateService, { provide: 'BASE_URL', useFactory: getBaseUrl }]
        })
    ], DownloadoldmandateModule);
    return DownloadoldmandateModule;
}());
export { DownloadoldmandateModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=downloadoldmandate.module.js.map