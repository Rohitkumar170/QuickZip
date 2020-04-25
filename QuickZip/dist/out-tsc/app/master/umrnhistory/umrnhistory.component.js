import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UMRNHISTORYSERVICEService } from '../../services/umrn_history/umrn-history-service.service';
import { Validators, FormBuilder } from '@angular/forms';
var UmrnhistoryComponent = /** @class */ (function () {
    function UmrnhistoryComponent(UMRService, formBuilder) {
        this.UMRService = UMRService;
        this.formBuilder = formBuilder;
    }
    UmrnhistoryComponent.prototype.ngOnInit = function () {
        this.SearchData = this.formBuilder.group({
            UMRN: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required]
        });
    };
    UmrnhistoryComponent.prototype.isFieldValid = function (field) {
        return !this.SearchData.get(field).valid && this.SearchData.get(field).touched;
    };
    UmrnhistoryComponent.prototype.SearchFunction = function (UMRN, CustomerName, RefrNo) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // alert(UMRN + " " + CustomerName + " " + RefrNo + " " + item.UserId);
        var jasondata = {
            "UMRN": UMRN,
            "customer1": CustomerName,
            "RefrNo": RefrNo,
            "UserId": item.UserId
        };
        this.UMRService.BindGridData(jasondata).subscribe(function (data) {
            _this.AllData = data;
        });
    };
    UmrnhistoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-umrnhistory',
            templateUrl: './umrnhistory.component.html',
            styleUrls: ['./umrnhistory.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UMRNHISTORYSERVICEService, FormBuilder])
    ], UmrnhistoryComponent);
    return UmrnhistoryComponent;
}());
export { UmrnhistoryComponent };
//# sourceMappingURL=umrnhistory.component.js.map