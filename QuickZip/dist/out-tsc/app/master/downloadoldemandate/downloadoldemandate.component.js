import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DownloadoldemandateService } from '../../Services/downloadoldemandate/downloadoldemandate.service';
var DownloadoldemandateComponent = /** @class */ (function () {
    function DownloadoldemandateComponent(_downloadservice) {
        this._downloadservice = _downloadservice;
        this.obj = "";
        this.inEditMode = false;
        this.SelectionStatusOfMutants = [];
        this.checkFlag = 0;
        this.Ischecked = 0;
        this.currentDate = new Date();
        this.toggleSelect = function (event) {
            //toggleSelect(event) {
            // var SelectionStatusOfMutants = [];
            this.all = event.target.checked;
            this.bindgrid.forEach(function (item) {
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
            alert(y.sponsorbankcode);
            var u = y.sponsorbankcode;
            // var k = formatDate(new Date(), "yyyy-MM-dd", "en");
            _this.PostData("2019-06-11", "2020-03-13", u);
        });
        this.BankBind();
    };
    DownloadoldemandateComponent.prototype.PostData = function (FromDate, Todate, bankdrop) {
        var _this = this;
        alert("Comp" + FromDate + " " + Todate + " " + bankdrop);
        var item = JSON.parse(sessionStorage.getItem('User'));
        console.log(item.UserId);
        this._downloadservice.SearchData(FromDate, Todate, bankdrop, item.UserId).subscribe(function (data) {
            _this.Databind = data;
            console.log(_this.Databind);
        });
    };
    DownloadoldemandateComponent.prototype.trackByMethod = function (index, el) {
        console.log(el);
    };
    DownloadoldemandateComponent.prototype.selected = function () {
        // for (let p = 0; p < this.arr.length; p++) {
        var elements = document.getElementsByName("allcheck");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type == "checkbox") {
                if (elements[i].checked) {
                    console.log("Checked", elements[i].checked);
                    this.inEditMode = true;
                    console.log(elements[i]);
                    break;
                }
                else {
                    console.log("Unchecked", elements[i].checked);
                    this.inEditMode = false;
                }
            }
        }
    };
    DownloadoldemandateComponent.prototype.BankBind = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        console.log(item.UserId);
        this._downloadservice.BankBind(item.UserId).
            subscribe(function (data) {
            _this.bankbind = data.Table;
            _this.i = Object.entries(_this.bankbind)[0][1];
            // alert(this.i.sponsorbankcode);
            // this.datahj(this.i.sponsorbankcode);
            console.log(_this.bankbind);
            // console.log(this.Emplist);
        });
    };
    DownloadoldemandateComponent.prototype.onChange = function (event, item) {
        //var element = <HTMLInputElement>document.getElementById("is3dCheckBox");
        //var isChecked = element.checked;
        //if (count == '') {
        this.checkFlag = 0;
        this.IsMandateID = item.mandateid;
        var CheckedCount = 0, UncheckedCount = 0;
        if (event.target.checked) {
            this.SelectionStatusOfMutants.push(item);
            console.log(this.SelectionStatusOfMutants);
            alert('checked');
            this.Ischecked = 1;
            CheckedCount++;
        }
        else {
            alert('not checked');
            this.SelectionStatusOfMutants.pop();
            UncheckedCount++;
            if (UncheckedCount == CheckedCount) {
                this.Ischecked = 0;
            }
        }
        //}
        //else
        //{
        //    this.bindgrid.forEach(function (item) {
        //        // console.log(item);
        //        //item.selected = event.target.checked;
        //        // this.onChange(event, item);
        //        if (event.target.checked) {
        //            this.SelectionStatusOfMutants.push(item);
        //            alert('c')
        //        }
        //        else {
        //            this.SelectionStatusOfMutants.pop();
        //            alert('nc')
        //        }
        //    });
        //}
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