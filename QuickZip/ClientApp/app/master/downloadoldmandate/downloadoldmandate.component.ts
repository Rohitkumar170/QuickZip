import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OldMandateClass1 } from '../../../Models/Old-Mandate/OldMandateClass1';
import { OldmandateService } from '../../Services/oldmandate/oldmandate.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-downloadoldmandate',
    templateUrl: './downloadoldmandate.component.html',
    styleUrls: ['./downloadoldmandate.component.css']
})
export class DownloadoldmandateComponent implements OnInit {

    constructor(public myservice: OldmandateService) { }

    ngOnInit() {
        //let item = JSON.parse(sessionStorage.getItem('User'));
        //                console.log(item.UserId);
        //  this.currentdate;

        this.BankdataBind();
    }
    bankdrop;
    CurrentDate = new Date();
    list = [];
    ifchecked(mandateid, Customer1, DateOnMandate, IsPrint, IsScan, Refrence1, Amount, AcNo, Code, BankName, Frequency, debittype, ToDebit, createdon) {

        //  console.log(mandateid);

        var aa =
        {
            'mandateid': mandateid,
            'Customer1': Customer1,
            'DateOnMandate': DateOnMandate,
            'IsPrint': IsPrint,
            'IsScan': IsScan,
            'Refrence1': Refrence1,
            'Amount': Amount,
            'AcNo': AcNo,
            'Code': Code,
            'BankName': BankName,
            'Frequency': Frequency,
            'debittype': debittype,
            'ToDebit': ToDebit,
            'createdon': createdon
        }

        this.list.push(aa);
        console.log(this.list);
    }

    BankdataBind() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BankBind(item.UserId).subscribe((res) => {
            // console.log(res);
            this.bankdrop = res;
        });
    }
    tabledata;
    SearchByReference(Reference) {
        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        //var c = Reference;
        //var e = [
        //    {
        //        'Reference': c
        //    }
        //]
        // var obj = JSON.stringify(e);
        // alert(obj);
        // console.log(e);
        this.myservice.Bindbyrefrence(item.UserId, Reference).subscribe((res) => {
            // console.log(res);
            this.tabledata = res;
        });
    }


    mydate(FromDate, ToDate, selected) {
        //   alert(FromDate + "  " + ToDate + " " + selected);

        if (FromDate != null && ToDate != null) {
            let item = JSON.parse(sessionStorage.getItem('User'));
            //  console.log(item.UserId);
            //var a = FromDate;
            //var b = ToDate;
            //var c = selected;

            this.myservice.BindbyDate(item.UserId, FromDate, ToDate, selected).subscribe((res) => {
                //   console.log(res);
                this.tabledata = res;
            });
        }
        else {
            alert("please choose the Date");
        }
        console.log(this.list);


    }

    SelectBank(FromDate, ToDate, selected) {
        let item = JSON.parse(sessionStorage.getItem('User'));
        // console.log(item.UserId);
        this.myservice.BindbyBank(item.UserId, FromDate, ToDate, selected).subscribe((res) => {
            //  console.log(res);
            this.tabledata = res;
        });
    }

    ConvertToCSV(objArray) {
        //this.HeaderArray = {
        //    MandateStatus: "Mandate Status", SendToBankDate: "Send To Bank Date", MandateFreshId: "Mandate ID", mandateMode: "mandate Mode",
        //    AutoRejectReason: "AutoRejectReason", updatedon: "updatedon", username: "username", UpdateBy: "UpdateBy", Enach: "Enach",
        //    IsMobileData: "IsMobileData", RejectedReason: "RejectedReason", REJECTED: "REJECTED", CreatedOn: "CreatedOn", is_enach_live: "is_enach_live",
        //    IsScan: "IsScan", JPGPath: "JPGPath", TIPPath: "TIPPath", IsPrint: "IsPrint", mandateid: "mandateid", status: "status", Amount: "Amount",
        //    Code: "Code", BankName: "BankName", DateOnMandate: "DateOnMandate", AcNo: "AcNo", Refrence1: "Refrence1", AcceptRefNo: "AcceptRefNo",
        //    NPCIErrorDesc: "NPCIErrorDesc", FromDate: "FromDate", Customer1: "Customer1", debittype: "debittype", Frequency: "Frequency", Monthly: "Monthly",
        //    ToDebit: "ToDebit", NPCIMsgId: "NPCIMsgId", MSGId: "MSGId", UMRN: "UMRN", AggregatorValue: "AggregatorValue", Amount_Numeric: "Amount_Numeric",
        //    SponsorBankCode: "SponsorBankCode", PhoneNumber: "PhoneNumber", EmailId: "EmailId", EmandateType: "EmandateType", ActivityId: "ActivityId",
        //    Refrence2: "Refrence2"
        //}
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

            //if (i == 0) {
            //    for (var index in this.HeaderArray) {
            //        if (line != '') line += ','

            //        line += this.HeaderArray[index];
            //    }
            //    str += line + '\r\n';
            //}

            //var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }
    downloadExcel() {
        alert("this method is working");
        var csvData = this.ConvertToCSV(JSON.stringify(this.list));
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'User_Results.csv';/* your file name*/
        a.click();
        return 'success';
    }
    //nontrade;
    //trade;
    //allNonTrades(event) {
    //    const checked = event.target.checked;
    //    this.nontrade.forEach(item => item.selected = checked);
    //}

    //allTrades(event) {
    //    const checked = event.target.checked;
    //    this.trade.forEach(item => item.selected = checked);
    //}

    //checkedDemo(abc) {
    //    console.log(abc);
    //}


}
