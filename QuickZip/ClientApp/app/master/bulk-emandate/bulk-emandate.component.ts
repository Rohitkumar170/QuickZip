import { Component, OnInit } from '@angular/core';
import { BulkEmandateAttributeClass } from '../../../Models/BulkEmandate/BulkEmandateAttributeClass';
import { BuldEmandateService } from '../../../app/Services/BulkEMandate/buld-emandate.service';
import { Route } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-bulk-emandate',
  templateUrl: './bulk-emandate.component.html',
  styleUrls: ['./bulk-emandate.component.css']
})
export class BulkEmandateComponent implements OnInit {

    constructor(private myservice: BuldEmandateService) { }
    ActivityType: string = 'E';
    topVal: any=50;
    EntityId: any = '10';
    tabledata: any;
    ngOnInit() {
        //ActivityType: string = 'p';
        let item = JSON.parse(sessionStorage.getItem('User'));
        //sessionStorage.setItem('ReferenceId', JSON.stringify(data[0]));
        //let item1 = JSON.parse(sessionStorage.getItem('ReferenceId'));
      // alert(item1.ReferenceId);
        this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
    }

    BindGrid(EntityId, topVal, ActivityType) {
        let item = JSON.parse(sessionStorage.getItem('User'));
      //  alert(item.UserId);
       // console.log(item.UserId);
      //  console.log(ActivityType);
        this.myservice.GetGridAllData(item.UserId, EntityId, topVal, ActivityType).subscribe((res) => {
            console.log(res);
           // console.log(res.length);
           // alert(res);
            this.tabledata = res;
            alert(this.tabledata.length);
           // var datalength = this.tabledata.length;
           alert(JSON.stringify(res));
            //var Count = JSON.parse(res).length;
        });
    }

    pagenext() {
        let item = JSON.parse(sessionStorage.getItem('User'));
        this.topVal += 50;
      //  console.log(this.topVal);
        this.BindGrid(this.EntityId, this.topVal, this.ActivityType);
    }

}
