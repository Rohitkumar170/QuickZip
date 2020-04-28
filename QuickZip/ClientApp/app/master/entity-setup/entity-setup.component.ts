import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EntitySetupServiceService } from '../../services/enity_setup/entity-setup-service.service';
import { BindCountry } from '../../../models/entity_setup/bind-country';
import { BindBank } from '../../../models/entity_setup/bind-bank';
import { EntityBusinessCode } from '../../../models/entity_setup/entity-business-code';
import { MainGrid } from '../../../models/entity_setup/main-grid';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-entity-setup',
  templateUrl: './entity-setup.component.html',
  styleUrls: ['./entity-setup.component.css']
})
export class EntitySetupComponent implements OnInit {
    CountryData: BindCountry;
    BankData: BindBank;
    EntityBusinessCodeData: EntityBusinessCode;
    MainGridData: MainGrid;
    MainGideDiv = true;
    EntityFormDiv = false;
    EntitySetupForm: FormGroup;
    Preloader: boolean = true;
    EMandateMode: boolean = false;
    NetBankingTab: boolean = false;
    DebitCardTab: boolean = false;
    AadhaarCardTab: boolean = false;
    ActivePaymentModeTab: boolean = false;
    PhysicalTab: boolean = false;
    IsThirdTransactionTab: boolean = false;
    constructor(private ESService: EntitySetupServiceService, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.EntitySetupForm = this.formBuilder.group({
            Code: [''],
            EntityName: [''],
            AppID: [''],
            MerchantKey: [''],
            Name: [''], 
            Email: [''],
            MobileNo: [''],
            Address: [''],
            Country: [''],
            State: [''],
            City: [''],
            PinCode: [''],
            UserName: [''],
            EntityBCode: [''],
            IsEMandate: [''],
            IsOverPrintMandate: [''],
            NetBankingCh: [''],
            DebitCardCh: [''],
            AadhaarCardCh: [''],
            ActivePaymentModeCh: ['']
           // IsPhysicalMandatCh: [''],
           // IsThirdTransactionCh:['']
        });
        this.Preloader = false;
        this.BindCountryAndBank();
        this.BingGrid();
  }

    BindCountryAndBank() {
        this.ESService.BindCountryAndBank().subscribe(
            (data) => {
                this.CountryData = data.Table;
                this.BankData = data.Table1;
                this.EntityBusinessCodeData = data.Table2;
                });
    }
    CountryFunction(CountryId) {

    }
    BingGrid() {
        this.Preloader = true;
        this.ESService.BingGrid().subscribe(
            (data) => {
                this.Preloader = false;
                this.MainGridData = data.Table;
            });
    }
    NewFun() {
        this.MainGideDiv = false;
        this.EntityFormDiv = true;
    }
    BackFun() {
        //this.InsertAllFun();
        //alert(this.AllFields.IsOverPrintMandate.value);
        //alert(this.AllFields.IsEMandate.value);
        this.MainGideDiv = true;
        this.EntityFormDiv = false;
    }
    get AllFields() { return this.EntitySetupForm.controls; }

    InsertAllFun() {
        var Code = this.AllFields.Code.value;
        var EntityName = this.AllFields.EntityName.value;
        var AppId = this.AllFields.AppID.value;
        var MerchantKey = this.AllFields.MerchantKey.value;
        var Name = this.AllFields.Name.value;
        var Email = this.AllFields.Email.value;
        var MobileNo = this.AllFields.MobileNo.value;
        var Address = this.AllFields.Address.value;
        var Country = this.AllFields.Country.value;
        var State = this.AllFields.State.value;
        var City = this.AllFields.City.value;
        var PinCode = this.AllFields.PinCode.value;
        var UserName = this.AllFields.UserName.value;
        var EntityBCode = this.AllFields.EntityBCode.value;
    }
    IsEMandateFun() {
        if (this.AllFields.IsEMandate.value == true) {
            this.EMandateMode = true;
        }
        else {
            this.EMandateMode = false;
        }
    }
    NetBankingFun() {
        if (this.AllFields.NetBankingCh.value == true) {
            this.NetBankingTab = true;
        }
        else {
            this.NetBankingTab = false;
        }
    }
    DebitCardFun() {
        if (this.AllFields.DebitCardCh.value == true) {
            this.DebitCardTab = true;
        }
        else {
            this.DebitCardTab = false;
        }
    }
    AadhaarCardFun() {
        if (this.AllFields.AadhaarCardCh.value == true) {
            this.AadhaarCardTab = true;
        }
        else {
            this.AadhaarCardTab = false;
        }
    }
    ActivePaymentModeFun() {      
        if (this.AllFields.ActivePaymentModeCh.value == true) {
            this.ActivePaymentModeTab = true;
        }
        else {
            this.ActivePaymentModeTab = false;
        }
    }
    //IsPhysicalMandatFun() {
    //    if (this.AllFields.IsPhysicalMandatCh.value == true) {
    //        this.PhysicalTab = true;
    //    }
    //    else {
    //        this.PhysicalTab = false;
    //    }
    //}
    //IsThirdTransactionFun() {
    //    if (this.AllFields.IsThirdTransactionCh.value == true) {
    //        this.IsThirdTransactionTab = true;
    //    }
    //    else {
    //        this.IsThirdTransactionTab = false;
    //    }
    //}
}
