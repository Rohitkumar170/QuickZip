import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UmrnUploadService } from '../../services/umrnupload/umrn-upload.service';
var UmrnuploadComponent = /** @class */ (function () {
    function UmrnuploadComponent(_UmrnUploadService) {
        this._UmrnUploadService = _UmrnUploadService;
        this.dataArray = [];
    }
    UmrnuploadComponent.prototype.ngOnInit = function () {
        this.BindGrid();
    };
    UmrnuploadComponent.prototype.BindGrid = function () {
        var _this = this;
        this._UmrnUploadService.BindGrid().
            subscribe(function (data) {
            _this.umrnupload = data.Table;
        });
        console.log(this.umrnupload);
    };
    UmrnuploadComponent.prototype.doubleClick = function (data) {
        this.dataArray.push(data);
        //  let UploadHeaderId = JSON.stringify(data.UploadHeaderId);
        this.UploadHeaderId = data.UploadHeaderId;
        var tbldiv1 = document.getElementById('tbldiv1');
        tbldiv1.style.display = 'none';
        this.BindOnRowdblClick();
    };
    UmrnuploadComponent.prototype.BindOnRowdblClick = function () {
        var _this = this;
        this._UmrnUploadService.BindOnRowdblClick(this.UploadHeaderId).
            subscribe(function (data) {
            _this.grdunsuccess = data.Table;
            _this.grdsuccess = data.Table1;
            _this.maingriddetails = data.Table2;
            var TotalCount = data.Table2.length;
            var successCount = data.Table1.length;
            var UnsuccessCount = data.Table.length;
            document.getElementById('lblTotalCount').innerHTML = 'Total Records: ' + TotalCount;
            document.getElementById('lblsuccessCount').innerHTML = 'Total Records: ' + successCount;
            document.getElementById('lblUnsuccessCount').innerHTML = 'Total Records: ' + UnsuccessCount;
            var tbldiv2 = document.getElementById('tbldiv2');
            tbldiv2.style.display = 'block';
            var tbldiv3 = document.getElementById('tbldiv3');
            tbldiv3.style.display = 'block';
            var tbldiv4 = document.getElementById('tbldiv4');
            tbldiv4.style.display = 'block';
        });
        console.log(this.umrnupload);
    };
    UmrnuploadComponent.prototype.btnback = function () {
        this.BindGrid();
        var tbldiv2 = document.getElementById('tbldiv2');
        tbldiv2.style.display = 'none';
        var tbldiv3 = document.getElementById('tbldiv3');
        tbldiv3.style.display = 'none';
        var tbldiv4 = document.getElementById('tbldiv4');
        tbldiv4.style.display = 'none';
        var tbldiv1 = document.getElementById('tbldiv1');
        tbldiv1.style.display = 'block';
    };
    UmrnuploadComponent.prototype.ConvertToCSV = function (objArray) {
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
    UmrnuploadComponent.prototype.downloadMaingriddetails = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            legacyUploadedID: "Legacy Upload Id", UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.maingriddetails));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Grid_details.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.downloadgrdsuccess = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.grdsuccess));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_Success.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.downloadgrdUnsuccess = function () {
        this.HeaderArray = [];
        this.HeaderArray = {
            UMRN: "UMRN", Amount: "Amount", CustomerName: "Customer Name", Refrence: "Reference",
            FromDate: "From Date", ToDate: "To Date", AccountType: "Account Type", AccountNo: "Account Number", IFSC: "IFSC", Remark: "Remark"
        };
        var csvData = this.ConvertToCSV(JSON.stringify(this.grdunsuccess));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'UMRN_UnSuccess.csv';
        a.click();
        return 'success';
    };
    UmrnuploadComponent.prototype.onClick = function (e) {
        //   this.elementClicked = 'You clicked: ' + e.target.innerHTML;
        alert('k');
    };
    UmrnuploadComponent = tslib_1.__decorate([
        Component({
            selector: 'app-umrnupload',
            templateUrl: './umrnupload.component.html',
            styleUrls: ['./umrnupload.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UmrnUploadService])
    ], UmrnuploadComponent);
    return UmrnuploadComponent;
}());
export { UmrnuploadComponent };
//# sourceMappingURL=umrnupload.component.js.map