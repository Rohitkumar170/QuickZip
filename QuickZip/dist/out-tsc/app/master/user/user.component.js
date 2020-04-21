import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'ClientApp/app/Services/User/user-service.service';
//import { UserServiceService } from 'ClientApp/app/Services/user/user-service.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(formBuilder, userservice) {
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.submitted = false;
        this.Temp = 1;
        this.tableid = false;
        this.formid = false;
        // public divuserlist:boolean = false;
        this.divaccessright = false;
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.Page_Count = 1;
        this.Search_Text = "";
        this.SponsorBankCodeId = [];
        this.divNachUser = false;
        this.divplusicon = false;
        this.divPresentmentAccess = false;
        this.divMaker = false;
        this.dvBulkUpload = false;
        this.dvVideos = false;
        this.dvtxtBankValidationcount = false;
        this.dvtxtAccountValidationcount = false;
        this.AcvalUsercount = "";
        this.bankvalUsercount = "";
        this.dvEnableCancel = false;
        this.Userid = 0;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.UserForm = this.formBuilder.group({
            UserName: ['', Validators.required],
            sponsorbankcode: ['', Validators.required],
            categorycode: ['', Validators.required],
            Type: ['', Validators.required],
            PhoneNo: new FormControl(),
            EmailId: new FormControl(),
            emailsent: new FormControl(),
            chkDownload: new FormControl(),
            chkCreate: new FormControl(),
            chkEdit: new FormControl(),
            chkView: new FormControl(),
            chkRefEdit: new FormControl(),
            nachuser: new FormControl(),
            chkUmrnHistory: new FormControl(),
            chkUmrnUpload: new FormControl(),
            chkAllUMRN: new FormControl(),
            chknachpresentment: new FormControl(),
            chkPresentMaker: new FormControl(),
            chkPresentChecker: new FormControl(),
            maker: new FormControl(),
            bankval: new FormControl(),
            accountval: new FormControl(),
            chkEnableCancel: new FormControl()
        });
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
        this.tableid = true;
        this.formid = false;
        this.divaccessright = false;
        this.divNachUser = false;
        this.divplusicon = false;
        this.divPresentmentAccess = false;
        this.divMaker = false;
        this.dvBulkUpload = false;
        this.dvVideos = false;
        this.dvtxtBankValidationcount = false;
        this.dvtxtAccountValidationcount = false;
        this.dvEnableCancel = false;
        //this.divuserlist = false;
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        this.bindUser();
        this.bindPresentmentMaker();
        this.BindPresentmentChecker();
    };
    UserComponent.prototype.isFieldValid = function (field) {
        return !this.UserForm.get(field).valid && this.UserForm.get(field).touched;
    };
    UserComponent.prototype.displayFieldCss = function (field) {
        return {
            'validate': this.isFieldValid(field),
        };
    };
    UserComponent.prototype.newUser = function () {
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tableid = false;
        this.formid = true;
    };
    UserComponent.prototype.bindUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getUser(item.ReferenceId, this.Page_Count).subscribe(function (data) {
            _this.userdata = data.Table;
            _this.sponsorbankcode = data.Table2;
            console.log(_this.sponsorbankcode);
            _this.categorycode = data.Table7;
            console.log(_this.categorycode);
            _this.bankacc = data.Table5;
            _this.UserForm.controls['bankval'].setValue("");
            _this.UserForm.controls['accountval'].setValue("");
            if (_this.bankacc.EnableUserWise == true) {
                _this.UserForm.controls['bankval'].setValue(_this.bankacc.BankValidationUserCount);
                _this.UserForm.controls['accountval'].setValue(_this.bankacc.AcValidationUserCount);
                _this.dvtxtAccountValidationcount = true;
                _this.dvtxtBankValidationcount = true;
                _this.AcvalUsercount = _this.bankacc.AcValidationUserCount;
                _this.bankvalUsercount = _this.bankacc.BankValidationUserCount;
            }
            else {
                _this.dvtxtBankValidationcount = false;
                _this.dvtxtAccountValidationcount = false;
            }
            if (_this.bankacc.EnableCancelUserWise == true) {
                _this.dvEnableCancel = true;
            }
            else {
                _this.dvEnableCancel = false;
            }
            _this.tempdata = data.Table6;
        });
    };
    UserComponent.prototype.bindPresentmentMaker = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getMakers(item.ReferenceId, item.UserId).subscribe(function (data) {
            _this.maker = data.Table;
            _this.nachuser = data.Table1;
        });
    };
    UserComponent.prototype.BindPresentmentChecker = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.CheckIsPresentmentChecker(item.ReferenceId).subscribe(function (data) {
            _this.checker = data.Table;
            if (data.Table1.Count > 0) {
                _this.dvBulkUpload = true;
            }
            if (data.Table2.Count > 0) {
                _this.dvVideos = true;
            }
            _this.bulkupload = data.Table1;
            console.log(_this.bulkupload);
            _this.bulkvideo = data.Table2;
            console.log(_this.bulkvideo);
        });
    };
    UserComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.UserForm.valid) {
            //this.sucess=true;
            var datat = this.UserForm.value;
            if (this.Temp == 1) {
                this.SaveUser();
            }
            else {
                this.UpdateUser();
            }
        }
        else {
            this.validateAllFormFields(this.UserForm);
        }
    };
    UserComponent.prototype.validateAllFormFields = function (formGroup) {
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
    UserComponent.prototype.userClick = function () {
        this.divaccessright = true;
    };
    UserComponent.prototype.adminClick = function () {
        this.divaccessright = false;
    };
    UserComponent.prototype.backClick = function () {
        this.bindUser();
        this.tableid = true;
        this.formid = false;
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").removeAttribute("disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");
    };
    UserComponent.prototype.isNumber = function (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57))) {
            return false;
        }
        else {
            return true;
        }
    };
    UserComponent.prototype.viewClick = function () {
        var element = document.getElementById("IsChkView");
        if (element.checked == true) {
            this.divNachUser = true;
            this.divplusicon = true;
        }
        else {
            this.divNachUser = false;
            this.divplusicon = false;
        }
    };
    UserComponent.prototype.presentmentClick = function () {
        var element = document.getElementById("chkIsNachPresent");
        if (element.checked == true) {
            this.divPresentmentAccess = true;
            this.divMaker = false;
        }
        else {
            this.divPresentmentAccess = false;
            this.divMaker = false;
        }
    };
    UserComponent.prototype.checkerClick = function () {
        var element = document.getElementById("chkIsChecker");
        if (element.checked == true) {
            this.divMaker = true;
        }
        else {
            this.divMaker = false;
        }
    };
    UserComponent.prototype.SaveUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.SaveUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId).subscribe(function (data) {
            _this.user = data;
            if (_this.user.Result == "-1") {
                _this.message = 'User already exists';
                alert(_this.message);
            }
            else {
                _this.message = 'User saved Successfully';
                alert(_this.message);
            }
            _this.UserForm.reset();
            _this.bindUser();
            _this.formid = false;
            _this.tableid = true;
            document.getElementById("btnEdit").setAttribute("disabled", "disabled");
            document.getElementById("btnBack").setAttribute("disabled", "disabled");
            document.getElementById("btnSave").setAttribute("disabled", "disabled");
            document.getElementById("btnNew").removeAttribute("disabled");
        });
    };
    UserComponent.prototype.UpdateUser = function () {
        var _this = this;
        var item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.UpdateUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId, this.Userid).subscribe(function (data) {
            _this.user = data;
            if (_this.user.Result == "1") {
                _this.message = 'User updated Successfully';
                alert(_this.message);
            }
            //else {
            //    this.message = 'User updated Successfully';
            //    alert(this.message);
            //}
            _this.UserForm.reset();
            _this.bindUser();
            _this.formid = false;
            _this.tableid = true;
            document.getElementById("btnEdit").setAttribute("disabled", "disabled");
            document.getElementById("btnBack").setAttribute("disabled", "disabled");
            document.getElementById("btnSave").setAttribute("disabled", "disabled");
            document.getElementById("btnNew").removeAttribute("disabled");
        });
    };
    UserComponent.prototype.isChklength = function () {
        var phnumber = (document.getElementById("txtphnumber").value);
        if (phnumber.length > 0 && phnumber.length < 10) {
            (document.getElementById("txtphnumber").value) == "";
            document.getElementById("txtphnumber").classList.add('validate');
            document.getElementById("txtphnumber").setAttribute("placeholder", "Please enter 10 - digit");
        }
        else {
            document.getElementById("txtphnumber").classList.remove('validate');
        }
    };
    UserComponent.prototype.removeClass = function () {
        document.getElementById("txtphnumber").classList.remove('validate');
        document.getElementById("txtEmailId").classList.remove('validate');
        document.getElementById("txtemailsent").classList.remove('validate');
    };
    UserComponent.prototype.chkEmail = function () {
        var email = (document.getElementById("txtEmailId").value);
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            document.getElementById("txtEmailId").classList.add('validate');
            document.getElementById("txtEmailId").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtEmailId").classList.remove('validate');
        }
    };
    UserComponent.prototype.chkEmailSent = function () {
        var email = (document.getElementById("txtemailsent").value);
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {
            document.getElementById("txtemailsent").classList.add('validate');
            document.getElementById("txtemailsent").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtemailsent").classList.remove('validate');
        }
    };
    UserComponent.prototype.onRowClicked = function (User) {
        var Currentrowid = this.UserForm.value;
        this.Userid = User.UserId;
        this.editData(this.Userid);
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tableid = false;
        this.formid = true;
        this.Temp = 2;
    };
    UserComponent.prototype.editData = function (Id) {
        var _this = this;
        this.userservice.EditData(Id).subscribe(function (data) {
            _this.userdata = data.Table;
            _this.sponsorbankid = data.Table1;
            _this.getcatcode = data.Table9;
            _this.getmaker = data.Table4;
            _this.getAccessRight1 = data.Table5;
            _this.getAccessRight2 = data.Table6;
            console.log(_this.userdata);
            _this.UserForm.controls['UserName'].setValue(_this.userdata[0].UserName);
            _this.UserForm.controls['EmailId'].setValue(_this.userdata[0].EmailId);
            _this.UserForm.controls['emailsent'].setValue(_this.userdata[0].EmailSendTo);
            _this.UserForm.controls['PhoneNo'].setValue(_this.userdata[0].PhoneNo);
            _this.UserForm.controls['sponsorbankcode'].setValue(_this.sponsorbankid[0].SponsorBankCodeId);
            _this.UserForm.controls['bankval'].setValue(_this.userdata[0].BankValidationUserCount);
            _this.UserForm.controls['accountval'].setValue(_this.userdata[0].AcValidationUserCount);
            _this.UserForm.controls['categorycode'].setValue(_this.getcatcode[0].CategoryCode);
            if (_this.userdata[0].PresentmentMaker == 1) {
                _this.UserForm.controls['chkPresentMaker'].setValue(true);
            }
            if (_this.userdata[0].PresentmentChecker == 1) {
                _this.divPresentmentAccess = true;
                _this.UserForm.controls['chkPresentChecker'].setValue(true);
            }
            if (_this.getAccessRight1[0].IsCreate == true) {
                _this.UserForm.controls['chkCreate'].setValue(true);
            }
            if (_this.getAccessRight1[0].IsDownload == true) {
                _this.UserForm.controls['chkDownload'].setValue(true);
            }
            if (_this.getAccessRight1[0].IsRead == true) {
                _this.UserForm.controls['chkView'].setValue(true);
                _this.divNachUser = true;
                _this.UserForm.controls['nachuser'].setValue(_this.getAccessRight1[0].ParallelUserIDs);
            }
            else {
                _this.UserForm.controls['chkView'].setValue(false);
                _this.divNachUser = false;
            }
            _this.getmaker = data.Table4;
            if (_this.userdata[0].PresentmentChecker == "1") {
                _this.divMaker = true;
                _this.UserForm.controls['maker'].setValue(_this.getmaker[0].MakerUserId);
            }
            if (_this.userdata[0].IsRefrenceEdit == true) {
                _this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                _this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (_this.userdata[0].IsRefrenceEdit == true) {
                _this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                _this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (_this.userdata[0].IsEnableCancel == true) {
                _this.UserForm.controls['chkEnableCancel'].setValue(true);
            }
            else {
                _this.UserForm.controls['chkEnableCancel'].setValue(false);
            }
            _this.UserForm.controls['Type'].setValue(_this.userdata[0].UserType);
            if (_this.userdata[0].UserType == 'u') {
                _this.divaccessright = true;
            }
            else {
                _this.divaccessright = false;
            }
            for (var i = 0; i < data.Table6.length; i++) {
                if (_this.getAccessRight2[i].LinkID == 17) {
                    _this.UserForm.controls['chkUmrnHistory'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 18) {
                    _this.UserForm.controls['chkUmrnUpload'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 19) {
                    _this.UserForm.controls['chknachpresentment'].setValue(true);
                }
                if (_this.getAccessRight2[i].LinkID == 22) {
                    _this.UserForm.controls['chkAllUMRN'].setValue(true);
                }
            }
        });
    };
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserServiceService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map