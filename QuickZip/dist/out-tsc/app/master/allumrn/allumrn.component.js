import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AllumrnService } from '../../Services/Allumrn/allumrn.service';
var AllumrnComponent = /** @class */ (function () {
    function AllumrnComponent(formBuilder, _allumrn) {
        this.formBuilder = formBuilder;
        this._allumrn = _allumrn;
        this.submitted = false;
    }
    AllumrnComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let item = JSON.parse(sessionStorage.getItem('User'));
        var Entityid = 13;
        var Pageno = 1;
        this._allumrn.GridBind(Entityid, Pageno).subscribe(function (data) {
            _this.Umrndta = data;
            console.log(_this.Umrndta);
        });
        this.Allumrn = this.formBuilder.group({
            UMRN: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required]
        });
    };
    AllumrnComponent.prototype.SearchFunction = function (UMRN, CustomerName, ReferenceNumber) {
        var _this = this;
        var Entityid = 13;
        var Pageno = 1;
        var jasondata = {
            "UMRN": UMRN,
            "CustomerName": CustomerName,
            "ReferenceNumber": ReferenceNumber,
            "Entityid": Entityid,
            "Pageno": Pageno
        };
        this._allumrn.SearchData(jasondata).subscribe(function (data) {
            _this.Umrndta = data;
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
    //SearchFunction() {
    //    this.submitted = true;
    //    if (this.Allumrn.valid) {
    //        alert("valid");
    //    } else {
    //        alert("Not valid");
    //        this.validateAllFormFields(this.Allumrn);
    //    }
    //}
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