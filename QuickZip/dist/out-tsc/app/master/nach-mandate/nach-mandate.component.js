import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
import { FormBuilder } from '@angular/forms';
var NachMandateComponent = /** @class */ (function () {
    function NachMandateComponent(router, formBuilder, _bankformService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._bankformService = _bankformService;
        // Work on Header button work
        this.btnedit = false;
        this.btnscanprint = false;
        this.btnmandateprint = false;
        this.btnblackmandateprint = false;
        this.btnoldoverprintmandate = false;
        this.btnprint = false;
        this.btnscanhalf = false;
        this.btnscan = false;
        this.btnvalidate = false;
        this.AEresponse = false;
        this.btnregisfund = false;
        this.isDisabled = false;
        this.isDisabledback = false;
        //end header button work
        this.btnCancelDisabled = true;
        this.IsCancel = false;
    }
    NachMandateComponent.prototype.ngOnInit = function () {
        this.NachMandate = this.formBuilder.group({
            Catagorycode: ['']
        });
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
        this.BinddataonPageLoad();
    };
    NachMandateComponent.prototype.show = function () { alert('hii'); };
    Object.defineProperty(NachMandateComponent.prototype, "AllFields", {
        get: function () { return this.NachMandate.controls; },
        enumerable: true,
        configurable: true
    });
    NachMandateComponent.prototype.BinddataonPageLoad = function () {
        var _this = this;
        this._bankformService.GetCategory().subscribe(function (data) {
            _this.Table11 = data.Table11;
            _this.Table3 = data.Table3;
            _this.Table2 = data.Table2;
            //if (this.Table12[0].IsEnableCancel == false) {
            //    this.btnCancelDisabled = true;    
            //    this.IsCancel = false;
            //}
            //else {
            //    this.btnCancelDisabled = false;    
            //    this.IsCancel = false;
            //}
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