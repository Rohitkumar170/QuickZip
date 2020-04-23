import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
var NachMandateComponent = /** @class */ (function () {
    function NachMandateComponent(router, formBuilder, _bankformService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._bankformService = _bankformService;
    }
    NachMandateComponent.prototype.ngOnInit = function () {
        var Sessionvalue = JSON.parse(sessionStorage.getItem('User'));
        this.lblIsRefrenceCheck = Sessionvalue.IsRefrenceCheck;
        this.lblIsMandateEdit = Sessionvalue.IsMandateEdit;
        this.lblIsRefrenceEdit = Sessionvalue.IsRefrenceEdit;
        this.lblOverMandate = Sessionvalue.IsOverPrintMandate;
        this.lblIsEMandate = Sessionvalue.IsEmandate;
        this.lblIsPhysicalMandate = Sessionvalue.IsPhysical;
        this.lblEntityId = Sessionvalue.ReferenceId;
        this.lblUserid = Sessionvalue.UserId;
        this.lblBranchId = Sessionvalue.BranchId;
        this.lblUserType = Sessionvalue.UserType;
        this.lblRefId = Sessionvalue.ReferenceId;
        this.BankForm = this.formBuilder.group({
            ddlcategory: ['']
        });
        this.BinddataonPageLoad();
    };
    Object.defineProperty(NachMandateComponent.prototype, "AllFields", {
        get: function () { return this.BankForm.controls; },
        enumerable: true,
        configurable: true
    });
    NachMandateComponent.prototype.BinddataonPageLoad = function () {
        var _this = this;
        this._bankformService.GetCategory().subscribe(function (data) {
            _this.Table12 = data.Table12;
        });
    };
    NachMandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nach-mandate',
            templateUrl: './nach-mandate.component.html',
            styleUrls: ['./nach-mandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, FormBuilder, BankFormService])
    ], NachMandateComponent);
    return NachMandateComponent;
}());
export { NachMandateComponent };
//# sourceMappingURL=nach-mandate.component.js.map