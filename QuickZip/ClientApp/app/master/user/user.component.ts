import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'ClientApp/app/Services/User/user-service.service';
import { User } from 'ClientApp/Models/User/user';
import { SponsorBankCode } from 'ClientApp/Models/User/sponsor-bank-code';
import { CategoryCode } from 'ClientApp/Models/User/category-code';
import { Maker } from 'ClientApp/Models/User/maker';
import { NachUser } from 'ClientApp/Models/User/nach-user';
import { Checker } from 'ClientApp/Models/User/checker';
import { AccessRights } from 'ClientApp/Models/User/access-rights';
import { Users } from 'ClientApp/Models/User/users';
import { Bankval } from 'ClientApp/Models/User/bankval';
import { TempData } from 'ClientApp/Models/User/temp-data';
import { Getsponsorcode } from 'ClientApp/Models/User/getsponsorcode';
import { GetMaker } from 'ClientApp/Models/User/get-maker';
import { GetAccessRights } from 'ClientApp/Models/User/get-access-rights';
import { GetCategoryCode } from 'ClientApp/Models/User/get-category-code';
//import { UserServiceService } from 'ClientApp/app/Services/user/user-service.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    UserForm: FormGroup;
    user: Users;
    userdata: User;
    categorycode: CategoryCode; sponsorbankid: Getsponsorcode; getmaker: GetMaker; getAccessRight1: GetAccessRights; getcatcode: GetCategoryCode; getAccessRight2: GetAccessRights;
    bankacc: Bankval;
    tempdata: TempData;
    submitted = false; Temp: number = 1;
    public tableid: boolean = false;
    public formid: boolean = false;
    // public divuserlist:boolean = false;
    public divaccessright: boolean = false;
    disabled = false;
    ShowFilter = false;
    limitSelection = false;
    public sponsorbankcode: SponsorBankCode;
    selectedItems: any = [];
    dropdownSettings: any = {};
    Page_Count: number = 1;
    Search_Text: string = "";
    maker: Maker;
    nachuser: NachUser;
    checker: Checker;
    bulkupload: AccessRights;
    bulkvideo: AccessRights;
    SponsorBankCodeId: any = [];
    public divNachUser: boolean = false;
    public divplusicon: boolean = false;
    public divPresentmentAccess: boolean = false;
    public divMaker: boolean = false;
    public dvBulkUpload: boolean = false;
    public dvVideos: boolean = false;
    public dvtxtBankValidationcount: boolean = false;
    public dvtxtAccountValidationcount: boolean = false;
    message: string;
    public AcvalUsercount: string = "";
    public bankvalUsercount: string = "";
    public dvEnableCancel: boolean = false;
    setClickedRow: Function;
    Userid: number = 0;

    constructor(private formBuilder: FormBuilder, private userservice: UserServiceService) { }

    ngOnInit() {
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
        }
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
    }

    isFieldValid(field: string) {
        return !this.UserForm.get(field).valid && this.UserForm.get(field).touched;
    }
    displayFieldCss(field: string) {
        return {
            'validate': this.isFieldValid(field),
        };
    }

    newUser() {
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tableid = false;
        this.formid = true;
    }

    bindUser() {


        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getUser(item.ReferenceId, this.Page_Count).subscribe((data) => {

            this.userdata = data.Table;

            this.sponsorbankcode = data.Table2;
            console.log(this.sponsorbankcode);

            this.categorycode = data.Table7;

            console.log(this.categorycode);



            this.bankacc = data.Table5;
            this.UserForm.controls['bankval'].setValue("");
            this.UserForm.controls['accountval'].setValue("");
            if (this.bankacc.EnableUserWise == true) {
                this.UserForm.controls['bankval'].setValue(this.bankacc.BankValidationUserCount);
                this.UserForm.controls['accountval'].setValue(this.bankacc.AcValidationUserCount);
                this.dvtxtAccountValidationcount = true;
                this.dvtxtBankValidationcount = true;

                this.AcvalUsercount = this.bankacc.AcValidationUserCount;
                this.bankvalUsercount = this.bankacc.BankValidationUserCount;

            }
            else {
                this.dvtxtBankValidationcount = false;
                this.dvtxtAccountValidationcount = false;
            }

            if (this.bankacc.EnableCancelUserWise == true) {
                this.dvEnableCancel = true;
            }
            else {
                this.dvEnableCancel = false;
            }

            this.tempdata = data.Table6;









        });
    }

    bindPresentmentMaker() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.getMakers(item.ReferenceId, item.UserId).subscribe((data) => {
            this.maker = data.Table;
            this.nachuser = data.Table1;

        });
    }

    BindPresentmentChecker() {

        let item = JSON.parse(sessionStorage.getItem('User'));
        this.userservice.CheckIsPresentmentChecker(item.ReferenceId).subscribe((data) => {
            this.checker = data.Table;
            if (data.Table1.Count > 0) {
                this.dvBulkUpload = true;
            }
            if (data.Table2.Count > 0) {
                this.dvVideos = true;
            }
            this.bulkupload = data.Table1;
            console.log(this.bulkupload);
            this.bulkvideo = data.Table2;
            console.log(this.bulkvideo);
        });
    }


    onSubmit() {


        this.submitted = true;
        if (this.UserForm.valid) {
            //this.sucess=true;
            const datat = this.UserForm.value;
            if (this.Temp == 1) {
                this.SaveUser();

            }
            else {
                this.UpdateUser();
            }

        } else {

            this.validateAllFormFields(this.UserForm);
        }
    }
    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    userClick() {
        this.divaccessright = true;
    }

    adminClick() {
        this.divaccessright = false;
    }

    backClick() {
        this.bindUser();
        this.tableid = true;
        this.formid = false;
        document.getElementById("btnSave").setAttribute("disabled", "disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").removeAttribute("disabled");
        document.getElementById("btnBack").setAttribute("disabled", "disabled");

    }

    isNumber(evt): boolean {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;

        if (charCode > 31 && (charCode != 46 && (charCode < 48 || charCode > 57))) {
            return false;
        } else {
            return true;
        }
    }

    viewClick() {
        let element = <HTMLInputElement>document.getElementById("IsChkView");
        if (element.checked == true) {
            this.divNachUser = true;
            this.divplusicon = true;

        }
        else {
            this.divNachUser = false;
            this.divplusicon = false;

        }
    }

    presentmentClick() {
        let element = <HTMLInputElement>document.getElementById("chkIsNachPresent");
        if (element.checked == true) {
            this.divPresentmentAccess = true;
            this.divMaker = false;
        }
        else {
            this.divPresentmentAccess = false;
            this.divMaker = false;
        }
    }

    checkerClick() {
        let element = <HTMLInputElement>document.getElementById("chkIsChecker");
        if (element.checked == true) {
            this.divMaker = true;

        }
        else {
            this.divMaker = false;

        }
    }
    SaveUser() {



        let item = JSON.parse(sessionStorage.getItem('User'));


        this.userservice.SaveUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId).subscribe(
            (data) => {
                this.user = data;
                if (this.user.Result == "-1") {

                    this.message = 'User already exists';
                    alert(this.message);
                }
                else {
                    this.message = 'User saved Successfully';

                    alert(this.message);
                }
                this.UserForm.reset();
                this.bindUser();

                this.formid = false;
                this.tableid = true;
                document.getElementById("btnEdit").setAttribute("disabled", "disabled");
                document.getElementById("btnBack").setAttribute("disabled", "disabled");
                document.getElementById("btnSave").setAttribute("disabled", "disabled");
                document.getElementById("btnNew").removeAttribute("disabled");


            }
        )

    }
    UpdateUser() {



        let item = JSON.parse(sessionStorage.getItem('User'));


        this.userservice.UpdateUser(JSON.stringify(this.UserForm.value), item.ReferenceId, item.UserId, this.Userid).subscribe(
            (data) => {
                this.user = data;
                if (this.user.Result == "1") {

                    this.message = 'User updated Successfully';
                    alert(this.message);
                }
                //else {
                //    this.message = 'User updated Successfully';

                //    alert(this.message);
                //}
                this.UserForm.reset();
                this.bindUser();

                this.formid = false;
                this.tableid = true;
                document.getElementById("btnEdit").setAttribute("disabled", "disabled");
                document.getElementById("btnBack").setAttribute("disabled", "disabled");
                document.getElementById("btnSave").setAttribute("disabled", "disabled");
                document.getElementById("btnNew").removeAttribute("disabled");


            }
        )

    }


    isChklength() {
        let phnumber = ((document.getElementById("txtphnumber") as HTMLInputElement).value);
        if (phnumber.length > 0 && phnumber.length < 10) {
            ((document.getElementById("txtphnumber") as HTMLInputElement).value) == "";
            document.getElementById("txtphnumber").classList.add('validate');
            document.getElementById("txtphnumber").setAttribute("placeholder", "Please enter 10 - digit");
        }
        else {
            document.getElementById("txtphnumber").classList.remove('validate');
        }
    }

    removeClass() {
        document.getElementById("txtphnumber").classList.remove('validate');
        document.getElementById("txtEmailId").classList.remove('validate');
        document.getElementById("txtemailsent").classList.remove('validate');
    }

    chkEmail() {
        let email = ((document.getElementById("txtEmailId") as HTMLInputElement).value);
        let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {

            document.getElementById("txtEmailId").classList.add('validate');
            document.getElementById("txtEmailId").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtEmailId").classList.remove('validate');
        }
    }

    chkEmailSent() {
        let email = ((document.getElementById("txtemailsent") as HTMLInputElement).value);
        let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) != true) {

            document.getElementById("txtemailsent").classList.add('validate');
            document.getElementById("txtemailsent").setAttribute("placeholder", "Invalid-Email");
        }
        else {
            document.getElementById("txtemailsent").classList.remove('validate');
        }
    }

    onRowClicked(User: any) {
        const Currentrowid = this.UserForm.value;
        this.Userid = User.UserId;

        this.editData(this.Userid);
        document.getElementById("btnSave").removeAttribute("disabled");
        document.getElementById("btnEdit").setAttribute("disabled", "disabled");
        document.getElementById("btnNew").setAttribute("disabled", "disabled");
        document.getElementById("btnBack").removeAttribute("disabled");
        this.tableid = false;
        this.formid = true;
        this.Temp = 2;

    }

    editData(Id) {
        this.userservice.EditData(Id).subscribe((data) => {

            this.userdata = data.Table;
            this.sponsorbankid = data.Table1;
            this.getcatcode = data.Table9;
            this.getmaker = data.Table4;
            this.getAccessRight1 = data.Table5;
            this.getAccessRight2 = data.Table6;
            console.log(this.userdata);
            this.UserForm.controls['UserName'].setValue(this.userdata[0].UserName);
            this.UserForm.controls['EmailId'].setValue(this.userdata[0].EmailId);
            this.UserForm.controls['emailsent'].setValue(this.userdata[0].EmailSendTo);
            this.UserForm.controls['PhoneNo'].setValue(this.userdata[0].PhoneNo);
            this.UserForm.controls['sponsorbankcode'].setValue(this.sponsorbankid[0].SponsorBankCodeId);
            this.UserForm.controls['bankval'].setValue(this.userdata[0].BankValidationUserCount);
            this.UserForm.controls['accountval'].setValue(this.userdata[0].AcValidationUserCount);
            this.UserForm.controls['categorycode'].setValue(this.getcatcode[0].CategoryCode);
            if (this.userdata[0].PresentmentMaker == 1) {
                this.UserForm.controls['chkPresentMaker'].setValue(true);
            }
            if (this.userdata[0].PresentmentChecker == 1) {
                this.divPresentmentAccess = true;
                this.UserForm.controls['chkPresentChecker'].setValue(true);

            }

            if (this.getAccessRight1[0].IsCreate == true) {
                this.UserForm.controls['chkCreate'].setValue(true);
            }
            if (this.getAccessRight1[0].IsDownload == true) {
                this.UserForm.controls['chkDownload'].setValue(true);
            }
            if (this.getAccessRight1[0].IsRead == true) {
                this.UserForm.controls['chkView'].setValue(true);
                this.divNachUser = true;
                this.UserForm.controls['nachuser'].setValue(this.getAccessRight1[0].ParallelUserIDs);

            }
            else {
                this.UserForm.controls['chkView'].setValue(false);
                this.divNachUser = false;
            }

            this.getmaker = data.Table4;
            if (this.userdata[0].PresentmentChecker == "1") {
                this.divMaker = true;
                this.UserForm.controls['maker'].setValue(this.getmaker[0].MakerUserId);
            }

            if (this.userdata[0].IsRefrenceEdit == true) {
                this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (this.userdata[0].IsRefrenceEdit == true) {
                this.UserForm.controls['chkRefEdit'].setValue(true);
            }
            else {
                this.UserForm.controls['chkRefEdit'].setValue(false);
            }
            if (this.userdata[0].IsEnableCancel == true) {
                this.UserForm.controls['chkEnableCancel'].setValue(true);
            }
            else {
                this.UserForm.controls['chkEnableCancel'].setValue(false);
            }
            this.UserForm.controls['Type'].setValue(this.userdata[0].UserType);

            if (this.userdata[0].UserType == 'u') {
                this.divaccessright = true;
            }
            else {
                this.divaccessright = false;
            }

            for (var i = 0; i < data.Table6.length; i++) {
                if (this.getAccessRight2[i].LinkID == 17) {
                    this.UserForm.controls['chkUmrnHistory'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 18) {
                    this.UserForm.controls['chkUmrnUpload'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 19) {
                    this.UserForm.controls['chknachpresentment'].setValue(true);
                }
                if (this.getAccessRight2[i].LinkID == 22) {
                    this.UserForm.controls['chkAllUMRN'].setValue(true);
                }
            }

        });


    }

}
