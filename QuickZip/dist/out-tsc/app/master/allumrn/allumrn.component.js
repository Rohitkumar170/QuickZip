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
    }
    AllumrnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Preloader = false;
        // let item = JSON.parse(sessionStorage.getItem('User'));
        var Entityid = 13;
        var Pageno = 1;
        this.Preloader = true;
        this._allumrn.GridBind(Entityid, Pageno).subscribe(function (data) {
            _this.Preloader = false;
            _this.Umrndta = data;
            // console.log(this.Umrndta);
        });
        this.Allumrn = this.formBuilder.group({
            Searchvalidation: ['', Validators.required]
        });
    };
    AllumrnComponent.prototype.onClick = function (event) {
        this.showModalcreateumrn = true;
    };
    AllumrnComponent.prototype.hide = function () {
        this.showModalcreateumrn = false;
    };
    //showModalumrnstatement: boolean;
    //onClick(event) {
    //    this.showModalumrnstatement = true;
    //}
    //hide() {
    //    this.showModalumrnstatement = false;
    //}
    AllumrnComponent.prototype.onRowClicked = function (data) {
        //const Currentrowid = this.Allumrn.value;
        var _this = this;
        this.dataArray.push(data);
        var UMRN = data.UMRN;
        var Entityid = 13;
        this._allumrn.GridDataDetails(UMRN, Entityid).subscribe(function (data) {
            // this.Preloader = false;
            _this.griddatadetail = data;
            // console.log(this.Umrndta);
        });
        // this.dataArray = data;
        //this.showModalumrnstatement = true;
        //this.Login.controls['FullName'].setValue(data.FullName);
        //this.Login.controls['Email'].setValue(data.Email);
        //this.Login.controls['Password'].setValue(data.Password);
        //this.buttonDisabled1 = false;
        //this.Temp = 2;
    };
    AllumrnComponent.prototype.isFieldValid = function (field) {
        return !this.Allumrn.get(field).valid && this.Allumrn.get(field).touched;
    };
    AllumrnComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    AllumrnComponent.prototype.SearchFunction = function (UMRN, CustomerName, ReferenceNumber) {
        var _this = this;
        //this.submitted = true;
        if (this.Allumrn.valid) {
            alert("valid");
            var Entityid = 13;
            var Pageno = 1;
            var umrn1 = UMRN.replace('\t', '');
            var CustomerName1 = CustomerName.replace('\t', '');
            var ReferenceNumber1 = ReferenceNumber.replace('\t', '');
            var jasondata = {
                "UMRN": umrn1,
                "CustomerName": CustomerName1,
                "ReferenceNumber": ReferenceNumber1,
                "Entityid": Entityid,
                "Pageno": Pageno
            };
            this.Preloader = true;
            this._allumrn.SearchData(jasondata).subscribe(function (data) {
                _this.Preloader = false;
                _this.Umrndta = data;
            });
        }
        else {
            alert("Not valid");
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