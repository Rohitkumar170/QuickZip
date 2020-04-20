import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HistoricalMandateServiceService } from '../../services/historical-mandate/historical-mandate-service.service';
var HistoricalMandateComponent = /** @class */ (function () {
    function HistoricalMandateComponent(HMService) {
        this.HMService = HMService;
    }
    HistoricalMandateComponent.prototype.ngOnInit = function () {
    };
    HistoricalMandateComponent.prototype.SearchFunction = function (FromDate, ToDate) {
        alert("Comp" + FromDate + " " + ToDate);
        this.HMService.BindGridData(FromDate, ToDate).subscribe(function (data) {
        });
    };
    HistoricalMandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-historical-mandate',
            templateUrl: './historical-mandate.component.html',
            styleUrls: ['./historical-mandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [HistoricalMandateServiceService])
    ], HistoricalMandateComponent);
    return HistoricalMandateComponent;
}());
export { HistoricalMandateComponent };
//# sourceMappingURL=historical-mandate.component.js.map