import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { BankFormService } from '../../Services/BankForm/bank-form.service';
import {BindEntityDetails } from '../../../Models/BankForm/BindEntityDetails'; import {BindLogoImageDetails } from '../../../Models/BankForm/BindLogoImageDetails';
import {BindBankNameDetails } from '../../../Models/BankForm/BindBankNameDetails'; import {BindSponserCode } from '../../../Models/BankForm/BindSponserCode';
import {BindBankUtilityCode } from '../../../Models/BankForm/BindBankUtilityCode'; import {BindBankPaymentMode } from '../../../Models/BankForm/BindBankPaymentMode';
import { BindEntityDetailsdata } from '../../../Models/BankForm/BindEntityDetailsdata'; import { BindDebitType } from '../../../Models/BankForm/BindDebitType';
import { Bindfrequency } from '../../../Models/BankForm/Bindfrequency'; import { BindEntityPeriods } from '../../../Models/BankForm/BindEntityPeriods';
import { BindEntitydebitcredit } from '../../../Models/BankForm/BindEntitydebitcredit'; import { BindEntityCategorytype } from '../../../Models/BankForm/BindEntityCategorytype';
import { BindLogincheck } from '../../../Models/BankForm/BindLogincheck';

@Component({
  selector: 'app-nach-mandate',
  templateUrl: './nach-mandate.component.html',
  styleUrls: ['./nach-mandate.component.css']
})
export class NachMandateComponent implements OnInit {
    BankForm: FormGroup; Table: BindEntityDetails; Table1: BindLogoImageDetails; Table2: BindBankNameDetails; Table3: BindSponserCode; Table4: BindBankUtilityCode; Table5: BindBankPaymentMode; Table6: BindEntityDetailsdata; Table7: BindDebitType; Table8: Bindfrequency; Table9: BindEntityPeriods; Table10: BindEntitydebitcredit; Table11: BindEntityCategorytype; Table12: BindLogincheck;
    lblIsRefrenceCheck; lblIsMandateEdit; lblIsRefrenceEdit; lblOverMandate; lblIsEMandate; lblIsPhysicalMandate; lblEntityId; lblUserid; lblBranchId; lblUserType; lblRefId;
    btnCancelDisabled: boolean = true; IsCancel = false;
    constructor(private router: Router, private formBuilder: FormBuilder, private _bankformService: BankFormService) { }
    ngOnInit() {
        let Sessionvalue = JSON.parse(sessionStorage.getItem('User')); 
        this.lblIsRefrenceCheck = Sessionvalue.IsRefrenceCheck; this.lblIsMandateEdit = Sessionvalue.IsMandateEdit; this.lblIsRefrenceEdit = Sessionvalue.IsRefrenceEdit; this.lblOverMandate = Sessionvalue.IsOverPrintMandate; this.lblIsEMandate = Sessionvalue.IsEmandate; this.lblIsPhysicalMandate = Sessionvalue.IsPhysical; this.lblEntityId = Sessionvalue.ReferenceId; this.lblUserid = Sessionvalue.UserId; this.lblBranchId = Sessionvalue.BranchId; this.lblUserType = Sessionvalue.UserType; this.lblRefId = Sessionvalue.ReferenceId;
        //this.BankForm = this.formBuilder.group({
        //    MandateMode: [''],
        //    AcNo: ['', Validators.required], MandateType: [''], DateOnMandate: ['', Validators.required],
        //    UtilityCode: [''], EntityName: [''],
        //    ToDebit: [''], BankName: [''], DebitType: [''], FrequencyType: [''], Sponsorbankcode: [''], Catagorycode: [''],
        //    IFSC: ['', Validators.required], MICR: [''],
        //    AmountRupees: ['', Validators.required],
        //    Amountinword: [''],
        //    EmailId: ['', [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        //    PhNumber: [''],
        //    Refrence1: ['', Validators.required], Refrence2: [''],
        //    FromDate: ['', Validators.required], ToDate: [''], chkUntil: [''],
        //    CustomerName1: ['', Validators.required],
        //    CustomerName2: [''], CustomerName3: [''],
        //    txtUMRN: ['']
        //});
        this.BinddataonPageLoad();
    }
    get AllFields() { return this.BankForm.controls; }
    BinddataonPageLoad() {
        this._bankformService.GetCategory().subscribe(
            (data) => {
                this.Table11 = data.Table11; this.Table3 = data.Table3; this.Table2 = data.Table2;

                //if (this.Table12[0].IsEnableCancel == false) {
                //    this.btnCancelDisabled = true;    
                //    this.IsCancel = false;
                //}
                //else {
                //    this.btnCancelDisabled = false;    
                //    this.IsCancel = false;
                //}

               
            });

    }
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }
    Decimal(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        // e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)
        if (charCode != 8 && (charCode != 0 && charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;

    }
   

}
