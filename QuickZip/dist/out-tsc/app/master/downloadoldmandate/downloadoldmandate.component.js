import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
var DownloadoldmandateComponent = /** @class */ (function () {
    function DownloadoldmandateComponent(myservice) {
        this.myservice = myservice;
        this.CurrentDate = new Date();
        this.list = [];
    }
    DownloadoldmandateComponent.prototype.ngOnInit = function () {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        //                console.log(item.UserId);
        //  this.currentdate;
        this.BankdataBind();
    };
    DownloadoldmandateComponent.prototype.ifchecked = function (mandateid, Customer1, DateOnMandate, IsPrint, IsScan, Refrence1, Amount, AcNo, Code, BankName, Frequency, debittype, ToDebit, createdon, event) {
        //  console.log(mandateid);
        var aa = {
            'mandateid': mandateid,
            'Customer1': Customer1,
            'DateOnMandate': DateOnMandate,
            'IsPrint': IsPrint,
            'IsScan': IsScan,
            'Refrence1': Refrence1,
            'Amount': Amount,
            'AcNo': AcNo,
            'Code': Code,
            'BankName': BankName,
            'Frequency': Frequency,
            'debittype': debittype,
            'ToDebit': ToDebit,
            'createdon': createdon
        };
        if (event.target.checked) {
            this.list.push(aa);
        }
        else {
            var removeindex = this.findIndex(function (itm) { return itm.mandateid === mandateid; }, function (itm1) { return itm1.Customer1 === Customer1; }, function (itm2) { return itm2.DateOnMandate === DateOnMandate; }, function (itm3) { return itm3.IsPrint === IsPrint; }, function (itm4) { return itm4.IsScan === IsScan; }, function (itm5) { return itm5.Refrence1 === Refrence1; }, function (itm6) { return itm6.Amount === Amount; }, function (itm7) { return itm7.AcNo === AcNo; }, function (itm8) { return itm8.Code === Code; }, function (itm9) { return itm9.BankName === BankName; }, function (itm10) { return itm10.Frequency === Frequency; }, function (itm11) { return itm11.debittype === debittype; }, function (itm12) { return itm12.ToDebit === ToDebit; }, function (itm13) { return itm13.createdon === createdon; });
            if (removeindex !== -1)
                this.list.splice(removeindex, 1);
        }
        // this.list.push(aa);
        console.log(this.list);
    };
    DownloadoldmandateComponent.prototype.findIndex = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13) {
        throw new Error("Method not implemented.");
    };
    DownloadoldmandateComponent.prototype.BankdataBind = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BankBind(item.UserId).subscribe(function (res) {
            // console.log(res);
            _this.bankdrop = res;
        });
    };
    DownloadoldmandateComponent.prototype.SearchByReference = function (Reference) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        //var c = Reference;
        //var e = [
        //    {
        //        'Reference': c
        //    }
        //]
        // var obj = JSON.stringify(e);
        // alert(obj);
        // console.log(e);
        this.myservice.Bindbyrefrence(item.UserId, Reference).subscribe(function (res) {
            // console.log(res);
            _this.tabledata = res;
        });
    };
    DownloadoldmandateComponent.prototype.mydate = function (FromDate, ToDate, selected) {
        //   alert(FromDate + "  " + ToDate + " " + selected);
        var _this = this;
        if (FromDate != null && ToDate != null) {
            var item = JSON.parse(sessionStorage.getItem('User'));
            //  console.log(item.UserId);
            //var a = FromDate;
            //var b = ToDate;
            //var c = selected;
            this.myservice.BindbyDate(item.UserId, FromDate, ToDate, selected).subscribe(function (res) {
                //   console.log(res);
                _this.tabledata = res;
            });
        }
        else {
            alert("please choose the Date");
        }
        console.log(this.list);
    };
    DownloadoldmandateComponent.prototype.SelectBank = function (FromDate, ToDate, selected) {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BindbyBank(item.UserId, FromDate, ToDate, selected).subscribe(function (res) {
            //  console.log(res);
            _this.tabledata = res;
        });
    };
    DownloadoldmandateComponent.prototype.ConvertToCSV = function (objArray) {
        //this.HeaderArray = {
        //    MandateStatus: "Mandate Status", SendToBankDate: "Send To Bank Date", MandateFreshId: "Mandate ID", mandateMode: "mandate Mode",
        //    AutoRejectReason: "AutoRejectReason", updatedon: "updatedon", username: "username", UpdateBy: "UpdateBy", Enach: "Enach",
        //    IsMobileData: "IsMobileData", RejectedReason: "RejectedReason", REJECTED: "REJECTED", CreatedOn: "CreatedOn", is_enach_live: "is_enach_live",
        //    IsScan: "IsScan", JPGPath: "JPGPath", TIPPath: "TIPPath", IsPrint: "IsPrint", mandateid: "mandateid", status: "status", Amount: "Amount",
        //    Code: "Code", BankName: "BankName", DateOnMandate: "DateOnMandate", AcNo: "AcNo", Refrence1: "Refrence1", AcceptRefNo: "AcceptRefNo",
        //    NPCIErrorDesc: "NPCIErrorDesc", FromDate: "FromDate", Customer1: "Customer1", debittype: "debittype", Frequency: "Frequency", Monthly: "Monthly",
        //    ToDebit: "ToDebit", NPCIMsgId: "NPCIMsgId", MSGId: "MSGId", UMRN: "UMRN", AggregatorValue: "AggregatorValue", Amount_Numeric: "Amount_Numeric",
        //    SponsorBankCode: "SponsorBankCode", PhoneNumber: "PhoneNumber", EmailId: "EmailId", EmandateType: "EmandateType", ActivityId: "ActivityId",
        //    Refrence2: "Refrence2"
        //}
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            //if (i == 0) {
            //    for (var index in this.HeaderArray) {
            //        if (line != '') line += ','
            //        line += this.HeaderArray[index];
            //    }
            //    str += line + '\r\n';
            //}
            //var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    DownloadoldmandateComponent.prototype.downloadExcel = function () {
        alert("this method is working");
        var csvData = this.ConvertToCSV(JSON.stringify(this.list));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'User_Results.csv'; /* your file name*/
        a.click();
        return 'success';
    };
    DownloadoldmandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-downloadoldmandate',
            templateUrl: './downloadoldmandate.component.html',
            styleUrls: ['./downloadoldmandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OldmandateService])
    ], DownloadoldmandateComponent);
    return DownloadoldmandateComponent;
}());
export { DownloadoldmandateComponent };
//# sourceMappingURL=downloadoldmandate.component.js.map