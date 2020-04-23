import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
var AllumrnComponent = /** @class */ (function () {
    function AllumrnComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    AllumrnComponent.prototype.ngOnInit = function () {
        this.Allumrn = this.formBuilder.group({
            UMRN: ['', Validators.required],
            CustomerName: ['', Validators.required],
            ReferenceNumber: ['', Validators.required]
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
    AllumrnComponent.prototype.SearchFunction = function () {
        this.submitted = true;
        if (this.Allumrn.valid) {
            alert("valid");
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
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], AllumrnComponent);
    return AllumrnComponent;
}());
export { AllumrnComponent };
//# sourceMappingURL=allumrn.component.js.map