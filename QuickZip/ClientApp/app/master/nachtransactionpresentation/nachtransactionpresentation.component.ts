import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NachtransactionporesentationService } from 'ClientApp/app/Services/nachtransactionpresentation/nachtransactionporesentation.service';
import { BankBind, BindGridForm } from 'ClientApp/Models/nachtransactionpresentation/nachtransactionpresentation';
@Component({
  selector: 'app-nachtransactionpresentation',
  templateUrl: './nachtransactionpresentation.component.html',
  styleUrls: ['./nachtransactionpresentation.component.css']
})
export class NachtransactionpresentationComponent implements OnInit {
    //bankbind: BankBind;
    bankbind: BankBind;
    bindgrid: BindGridForm
    i: any;
   // var EntityId;
    // var UserId;
    bank = 25;
    userid = 86;
    EntityId = 10;

   

    constructor(private NTPService: NachtransactionporesentationService) { }

    ngOnInit() {
        this.BankBind();
        this.CheckUser();

        //this.BindGridForm();
  }

    BankBind() {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.BankBind('86','10').
            subscribe(res => this.bankbind = res, error => console.log(error));
           
    }
    CheckUser() {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        this.NTPService.CheckUser('86', '10').
            subscribe((data) => {
                //this.bankbind = data.Table;
                //this.i = Object.entries(this.bankbind)[0][1];
            });
    }

    BindGridForm(bank, userid,EntityId) {
        this.NTPService.BindGridForm('25', '86', '10').
        subscribe(res => this.bindgrid = res, error => console.log(error));
                //this.Databind = data;
           // });
    }
}
