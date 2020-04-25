import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
import { HistoricalMandateComponent } from './historical-mandate.component';
import { HistoricalmandateRoutingModule } from './historicalmandate-routing.module';
var HistoricalmandateModule = /** @class */ (function () {
    function HistoricalmandateModule() {
    }
    HistoricalmandateModule = tslib_1.__decorate([
        NgModule({
            declarations: [HistoricalMandateComponent],
            imports: [
                CommonModule, FormsModule, ReactiveFormsModule,
                HistoricalmandateRoutingModule
            ],
            providers: [
                HistoricalMandateServiceService, { provide: 'BASE_URL', useFactory: getBaseUrl }
            ]
        })
    ], HistoricalmandateModule);
    return HistoricalmandateModule;
}());
export { HistoricalmandateModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=historicalmandate.module.js.map