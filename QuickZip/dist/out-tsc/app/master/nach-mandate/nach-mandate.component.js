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
        this.btnCancelDisabled = true;
        this.IsCancel = false;
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
        //this.BankForm = this.formBuilder.group({
        //    MandateMode: [''],
        //    AcNo: ['', Validators.required], MandateType: [''], DateOnMandate: ['', Validators.required],
        //    UtilityCode: [''], EntityName: [''],
        //    ToDebit: [''], BankName: [''], DebitType: [''], FrequencyType: [''], Sponsorbankcode: [''], Catagorycode: [''],
        //    IFSC: ['', Validators.required], MICR: [''],
        //    AmountRupees: ['', Validators.required],
        //    Amountinword: [''],
        //    EmailId: ['', [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        //    PhNumber: [''],
        //    Refrence1: ['', Validators.required], Refrence2: [''],
        //    FromDate: ['', Validators.required], ToDate: [''], chkUntil: [''],
        //    CustomerName1: ['', Validators.required],
        //    CustomerName2: [''], CustomerName3: [''],
        //    txtUMRN: ['']
        //});
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
    NachMandateComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    NachMandateComponent.prototype.Decimal = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)
        if (charCode != 8 && (charCode != 0 && charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
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