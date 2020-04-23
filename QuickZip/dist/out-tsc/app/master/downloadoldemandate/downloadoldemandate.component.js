import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';
//import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { formatDate } from '@angular/common';
//import { Console } from '@angular/core/src/console';
//import { element } from '@angular/core/src/render3';
var DownloadoldemandateComponent = /** @class */ (function () {
    //IsMandateID: string;
    function DownloadoldemandateComponent(_downloadservice) {
        this._downloadservice = _downloadservice;
        this.SelectionStatusOfMutants = [];
        this.checkFlag = 0;
        this.Ischecked = 0;
        this.currentDate = new Date();
        this.toggleSelect = function (event) {
            //toggleSelect(event) {
            // var SelectionStatusOfMutants = [];
            this.all = event.target.checked;
            this.Databind.forEach(function (item) {
                // console.log(item);
                item.selected = event.target.checked;
                // this.onChange(event, item);
            });
            this.checkFlag = 1;
            if (event.target.checked) {
                this.Ischecked = 1;
                //  this.Isallcheck = 1;
            }
            else {
                this.Ischecked = 0;
            }
        };
    }
    DownloadoldemandateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        console.log(item.UserId);
        this._downloadservice.BankBind(item.UserId).
            subscribe(function (data) {
            _this.bankbind = data.Table;
            var y = Object.entries(_this.bankbind)[0][1];
            // alert(y.sponsorbankcode);
            var u = y.sponsorbankcode;
            var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            _this.PostData(k, k, u);
        });
        this.BankBind();
    };
    DownloadoldemandateComponent.prototype.PostData = function (FromDate, Todate, bankdrop) {
        var _this = this;
        // alert("Comp" + FromDate + " " + Todate + " " + bankdrop);
        var item = JSON.parse(sessionStorage.getItem('User'));
        console.log(item.UserId);
        this._downloadservice.SearchData(FromDate, Todate, bankdrop, item.UserId).subscribe(function (data) {
            _this.Databind = data;
            console.log(_this.Databind);
        });
    };
    DownloadoldemandateComponent.prototype.Removelabel = function () { this.errormsg = ''; };
    DownloadoldemandateComponent.prototype.BankBind = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        console.log(item.UserId);
        this._downloadservice.BankBind(item.UserId).
            subscribe(function (data) {
            _this.bankbind = data.Table;
            _this.i = Object.entries(_this.bankbind)[0][1];
            // alert(this.i.sponsorbankcode);
            console.log(_this.bankbind);
        });
    };
    DownloadoldemandateComponent.prototype.onChange = function (event, item) {
        //var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        //var isChecked = element.checked;
        //if (count == '') {
        this.checkFlag = 0;
        // this.IsMandateID = item.mandateid;
        var CheckedCount = 0, UncheckedCount = 0;
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
            console.log(this.SelectionStatusOfMutants);
            // alert('checked')
            this.Ischecked = 1;
            CheckedCount++;
            //this.dataArray.push(item);
            //console.log(this.dataArray)
        }
        else {
            //  alert('not checked')
            this.SelectionStatusOfMutants.pop();
            UncheckedCount++;
            if (UncheckedCount == CheckedCount) {
                this.Ischecked = 0;
            }
            //if (this.dataArray.length > 0) {
            //    for (var i = 0; i < this.dataArray.length; i++) {
            //        if (this.dataArray[i].ManDateID == item.ManDateID) {
            //            // this.dataArray.pop();
            //            // delete [this.dataArray.indexOf()];
            //            this.dataArray.splice(this.dataArray.indexOf(item), 1);
            //            console.log(this.dataArray);
            //        }
            //        else {
            //        }
            //    }
            //}
        }
    };
    DownloadoldemandateComponent.prototype.ConvertToCSV = function (objArray) {
        this.HeaderArray = {
            DebtorName: "Debtor Name", InstructedAgentMemberName: "Instructed Agent Member Name", ConsumerReferenceNumber: "Consumer Reference Number", DebtorAccountNumber: "Debtor Account Number",
            DebtorAgentID: "Debtor Agent ID", Collection: "Collection Amount", MaximumAmount: "Maximum Amount", ServiceProvider: "Service Provider", Frequency: "Frequency",
            DebtorAccountType: "Debtor Account Type", CreationDateTime: "Creation Date Time"
        };
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
            if (i == 0) {
                for (var index in this.HeaderArray) {
                    if (line != '')
                        line += ',';
                    line += this.HeaderArray[index];
                }
                str += line + '\r\n';
            }
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    DownloadoldemandateComponent.prototype.download = function () {
        alert(this.Ischecked);
        if (this.Ischecked == 1) {
            //  alert("Selecetd");
        }
        else {
            // alert("Not selected any checkbox");
            this.errormsg = "Checkbox is not Selected";
        }
        //console.log(this.checkFlag);
        if (this.Ischecked == 1) {
            if (this.checkFlag == 0) {
                var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
            }
            else {
                var csvData = this.ConvertToCSV(JSON.stringify(this.Databind));
            }
            // var csvData = this.ConvertToCSV(JSON.stringify(this.Databind));
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'User_Results.csv'; /* your file name*/
            a.click();
            return 'success';
        }
    };
    DownloadoldemandateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-downloadoldemandate',
            templateUrl: './downloadoldemandate.component.html',
            styleUrls: ['./downloadoldemandate.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DownloadoldemandateService])
    ], DownloadoldemandateComponent);
    return DownloadoldemandateComponent;
}());
export { DownloadoldemandateComponent };
//# sourceMappingURL=downloadoldemandate.component.js.map