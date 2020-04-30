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
        this.lblTodateMandataoryforEsign = false;
        this.btnCancel = false;
        this.btnSecVal = false;
        this.btnFirstVal = false;
        this.btnEditDisable = false;
        this.btnPhysicalMandate = false;
        this.btnEemandate = false;
        this.btnenach = false;
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
        this.UtilityCodedesabled = true;
        this.CreateCodedesabled = true;
        this.ModifyCodedesabled = true;
        this.CancelCodedesabled = true;
        this.EntityNameCodedesabled = true;
        this.rdsbCodedesabled = true;
        this.rdcaCodedesabled = true;
        this.rdccCodedesabled = true;
        this.rdnbreCodedesabled = true;
        this.rdsbnrdCodedesabled = true;
        this.rdotherCodedesabled = true;
        this.UMRNCodedesabled = true;
        this.Amountcodedisabled = true;
        this.rdmonthlycodedisabled = true;
        this.rdquaterlycodedisabled = true;
        this.rdhalfyrlycodedisabled = true;
        this.rdyearlycodedisabled = true;
        this.Radio1codedisabled = true;
        // rdfxdamtcodedisabled: boolean = true;
        this.rdmaxamtcodedisabled = true;
        this.Reference2codedisabled = true;
        this.Periodtocodedisabled = true;
        this.Untillcancelledcodedisabled = true;
        this.Customer2disabled = true;
        this.Customer3disabled = true;
        this.Cancelleddisabled = true;
        //end header button work
        this.btnCancelDisabled = true;
        this.IsCancel = false;
    }
    NachMandateComponent.prototype.ngOnInit = function () {
        this.NachMandate = this.formBuilder.group({
            MandateMode: [''], Catagorycode: [''], Mandatetype: [''], UMRN: [''], UMRNDATE: [''], Sponsorcode: [''], Utilitycode: [''], Create: [''], Modify: [''],
            Cancel: [''], Authrizename: [''], Todebit: [''], Bankaccountno: [''], Withbank: [''], IFSC: [''], MICR: [''], Amount: [''], Amountrupees: [''],
            Frequency: [''],
            Debittype: [''],
            Reference: [''], Phoneno: [''], Refrence2: [''], Email: [''], PeriodFrom: [''], PeriodTo: [''], Untillcancelled: [''],
            Customer1: [''], Customer2: [''], Customer3: ['']
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
    Object.defineProperty(NachMandateComponent.prototype, "AllFields", {
        get: function () { return this.NachMandate.controls; },
        enumerable: true,
        configurable: true
    });
    NachMandateComponent.prototype.BinddataonPageLoad = function () {
        var _this = this;
        this._bankformService.GetCategory().subscribe(function (data) {
            _this.Table12 = data.Table12;
            if (_this.Table12[0].IsEnableCancel == false) {
                _this.Cancelleddisabled = false;
                _this.btnCancel = true;
            }
            else {
                _this.Cancelleddisabled = true;
                _this.IsCancel = false;
            }
            _this.Table7 = data.Table7;
            _this.Table8 = data.Table8;
            _this.Table10 = data.Table10;
            _this.Table9 = data.Table9;
            if (data.Table9[0].isenable == true) {
                _this.Periodtocodedisabled = false;
            }
            else {
                _this.Periodtocodedisabled = true;
            }
            if (data.Table9[1].isenable == true) {
                _this.Untillcancelledcodedisabled = false;
            }
            else {
                _this.Untillcancelledcodedisabled = true;
            }
            _this.Table2 = data.Table2;
            _this.Table11 = data.Table11;
            _this.Table3 = data.Table3;
            _this.NachMandate.controls['Utilitycode'].setValue(_this.Table3[0].utilityCode);
        });
    };
    NachMandateComponent.prototype.trackByFn = function (index, item) {
        return index; // or item.id
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