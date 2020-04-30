import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AllumrnService } from '../../Services/Allumrn/allumrn.service';
var AllumrnComponent = /** @class */ (function () {
    function AllumrnComponent(formBuilder, _allumrn) {
        this.formBuilder = formBuilder;
        this._allumrn = _allumrn;
        this.submitted = false;
        this.Preloader = true;
        this.dataArray = [];
        this.SelectionStatusOfMutants = [];
        this.UserId = "";
        this.EntityId = "";
        this.Selectionrow = [];
        this.checkFlag = 0;
        this.Pageno1 = 1;
    }
    AllumrnComponent.prototype.ngOnInit = function () {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
        this.showModalumrnstatement1 = false;
        this.showdisplay = false;
        this.Preloader = false;
        this.GridBind();
        this.Allumrn = this.formBuilder.group({
            Searchvalidation: ['', Validators.required]
        });
        this.Addumrn = this.formBuilder.group({
            Newumrn: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required],
            Amount: ['', Validators.required],
            FromDate: ['', Validators.required],
            ToDate: ['', Validators.required]
        });
    };
    AllumrnComponent.prototype.GridBind = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        this.Preloader = true;
        this._allumrn.GridBind1(this.EntityId, this.Pageno1).subscribe(function (data) {
            // console.log(data);
            _this.Preloader = false;
            _this.umrndata1 = data.Table;
            var k = data.Table.length;
            //  alert(k);
            if (k < 100) {
                _this.showdisplay = false;
            }
            else {
                _this.showdisplay = true;
            }
        });
    };
    AllumrnComponent.prototype.pagenext = function () {
        this.Pageno1 = this.Pageno1 + 1;
        this.GridBind();
    };
    AllumrnComponent.prototype.onClick = function (event) {
        this.showmodalcreateumrn = true;
    };
    AllumrnComponent.prototype.hide = function () {
        this.showmodalcreateumrn = false;
        this.showModalumrnstatement = false;
        this.showModalumrnstatement1 = false;
    };
    AllumrnComponent.prototype.Insertumrn = function (NEWUMRN, Customername, ReferenceNumber, Amount, FromDate, ToDate) {
        var _this = this;
        if (this.Addumrn.valid) {
            var item = JSON.parse(sessionStorage.getItem('User'));
            this.UserId = item.UserId;
            this.EntityId = item.ReferenceId;
            // let CreatedBy = 1;
            var jasondata = {
                "UMRN": NEWUMRN,
                "CustomerName": Customername,
                "ReferenceNumber": ReferenceNumber,
                "Entityid": this.EntityId,
                "Amount": Amount,
                "FromDate": FromDate,
                "ToDate": ToDate,
                "Userid": this.UserId,
                "CreatedBy": this.UserId
            };
            this._allumrn.AddUmrn1(jasondata).subscribe(function (data) {
                console.log(data);
                _this.savedata = data;
                console.log(_this.savedata);
                if (_this.savedata[0].updated == 2) {
                    alert("UMRN Already Exist1");
                }
                else {
                    alert("Data Save successfully1");
                }
                //if (this.savedata.updated == 2) {
                //    alert("UMRN Already Exist");
                //}
                //else {
                //    alert("Data Save successfully");
                //}
                //if (data.updated == 2) {
                //    alert("UMRN Already Exist");
                //}
                //else {
                //    alert("Data Save successfully");
                //}
                //alert(this.savedata);
                //console.log(this.savedata);
                //if (this.savedata == 2) {
                //    alert("UMRN Already Exist");
                //}
                //else {
                //    alert("Data Save successfully");
                //}
                _this.showmodalcreateumrn = false;
                _this.GridBind();
            });
        }
        else {
            this.validateAllFormFields(this.Addumrn);
        }
    };
    AllumrnComponent.prototype.onRowClicked = function (data) {
        var _this = this;
        var UMRN = data.UMRN;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.UserId = item.UserId;
        this.EntityId = item.ReferenceId;
        this._allumrn.GridDataDetails(UMRN, this.EntityId).subscribe(function (data) {
            _this.Preloader = false;
            _this.griddatadetail = data;
            _this.dataArray.push(data);
            var i = Object.entries(_this.griddatadetail)[0][1];
            console.log(i.type);
            if (i.type == 0) {
                alert("0");
                _this.showModalumrnstatement1 = true;
            }
            else if (i.type == 2) {
                alert("2");
                _this.showModalumrnstatement1 = true;
            }
            else {
                alert("1");
                _this.showModalumrnstatement = true;
            }
        });
    };
    AllumrnComponent.prototype.isFieldValid = function (field) {
        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    };
    AllumrnComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    AllumrnComponent.prototype.isFieldValid1 = function (field) {
        return !this.Addumrn.get(field).valid && this.Addumrn.get(field).touched;
    };
    AllumrnComponent.prototype.displayFieldCss1 = function (field) {
        return {
            'validate': this.isFieldValid1(field),
        };
    };
    AllumrnComponent.prototype.backClick = function () {
        this.Addumrn.reset();
        this.Allumrn.reset();
        this.GridBind();
    };
    AllumrnComponent.prototype.downloadfile = function (lang) {
        alert("Clicked");
        this.SelectionStatusOfMutants.push(lang);
        //this.Singlerow = lang;
        //console.log(this.Singlerow);
        this.checkFlag = 1;
    };
    AllumrnComponent.prototype.SearchFunction = function (UMRN, CustomerName, ReferenceNumber) {
        var _this = this;
        if (this.Allumrn.valid) {
            //  alert("valid");
            var item = JSON.parse(sessionStorage.getItem('User'));
            this.UserId = item.UserId;
            this.EntityId = item.ReferenceId;
            // let Pageno = 1;
            var umrn1 = UMRN.replace('\t', '');
            var CustomerName1 = CustomerName.replace('\t', '');
            var ReferenceNumber1 = ReferenceNumber.replace('\t', '');
            var jasondata = {
                "UMRN": umrn1,
                "CustomerName": CustomerName1,
                "ReferenceNumber": ReferenceNumber1,
                "Entityid": this.EntityId,
                "Pageno": this.Pageno1
            };
            this.Preloader = true;
            this._allumrn.SearchData(jasondata).subscribe(function (data) {
                _this.Preloader = false;
                _this.umrndata1 = data;
            });
        }
        else {
            // alert("Not valid");
            this.validateAllFormFields(this.Allumrn);
        }
    };
    AllumrnComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    AllumrnComponent.prototype.ConvertToCSV = function (objArray) {
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", Status: "Status", ReferenceNo: "ReferenceNo",
            PresentmentDate: "PresentmentDate", type: "Type", FileNo: "FileNo", customer1: "Customer Name"
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
    AllumrnComponent.prototype.ConvertToCSV1 = function (objArray) {
        this.HeaderArray1 = {
            Srno: "Srno", UMRN: "UMRN", CustomerName: "CustomerName", Refrence: "Refrence",
            Amount: "Amount", FromDate: "FromDate", ToDate: "ToDate", CreatedOn: "CreatedOn", RecordType: "RecordType", MandateStatus: "MandateStatus", ErrorCode: "ErrorCode"
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
                for (var index in this.HeaderArray1) {
                    if (line != '')
                        line += ',';
                    line += this.HeaderArray1[index];
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
    AllumrnComponent.prototype.ConvertToCSV3 = function (objArray) {
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", Status: "Status", Reference: "Reference",
            type: "Type", CustomerName: "Customer Name", FromDate: "FromDate", ToDate: "ToDate",
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
    AllumrnComponent.prototype.download3 = function () {
        var csvData = this.ConvertToCSV3(JSON.stringify(this.griddatadetail));
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
    AllumrnComponent.prototype.download = function () {
        var csvData = this.ConvertToCSV(JSON.stringify(this.griddatadetail));
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
    };
    AllumrnComponent.prototype.download1 = function () {
        if (this.checkFlag == 0) {
            var csvData = this.ConvertToCSV1(JSON.stringify(this.umrndata1));
        }
        else {
            var csvData = this.ConvertToCSV(JSON.stringify(this.SelectionStatusOfMutants));
        }
        //  var csvData = this.ConvertToCSV1(JSON.stringify(this.Umrndta));
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
    };
    AllumrnComponent = tslib_1.__decorate([
        Component({
            selector: 'app-allumrn',
            templateUrl: './allumrn.component.html',
            styleUrls: ['./allumrn.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, AllumrnService])
    ], AllumrnComponent);
    return AllumrnComponent;
}());
export { AllumrnComponent };
//# sourceMappingURL=allumrn.component.js.map