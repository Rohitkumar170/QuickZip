import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DownloadEmandateComponent } from './download-emandate.component';
import { CommonModule } from '@angular/common';
import { DownloademandateRoutingModule } from './downloademandate-routing.module';
import { DownloadEmandateServiceService } from '../../services/downloademandate/download-emandate-service.service';
var DownloademandateModule = /** @class */ (function () {
    function DownloademandateModule() {
    }
    DownloademandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [DownloadEmandateComponent],
            imports: [
                CommonModule,
                DownloademandateRoutingModule,
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [DownloadEmandateServiceService]
        })
    ], DownloademandateModule);
    return DownloademandateModule;
}());
export { DownloademandateModule };
//# sourceMappingURL=downloademandate.module.js.map